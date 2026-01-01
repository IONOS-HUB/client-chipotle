import { useLayoutEffect, useRef, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { gsap } from "gsap";
import { GoArrowUpRight } from "react-icons/go";

const CardNav = ({
  logo,
  logoAlt = "Logo",
  items,
  className = "",
  ease = "power3.out",
  baseColor = "#fff",
  menuColor,
  buttonBgColor,
  buttonTextColor,
  onLinkClick,
  onButtonClick,
  brandName = "El Chipotle",
}) => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const navRef = useRef(null);
  const cardsRef = useRef([]);
  const tlRef = useRef(null);
  const location = useLocation();

  // Cerrar el menú cuando cambia la ruta y reinicializar timeline
  useEffect(() => {
    if (isExpanded || isHamburgerOpen) {
      // Reset inmediato de estados
      setIsHamburgerOpen(false);
      setIsExpanded(false);
      
      // Reset visual inmediato
      if (navRef.current) {
        gsap.set(navRef.current, { height: 60, overflow: "hidden" });
      }
      if (cardsRef.current.length) {
        gsap.set(cardsRef.current, { y: 50, opacity: 0 });
      }
      
      // Kill timeline anterior
      if (tlRef.current) {
        tlRef.current.kill();
      }
    }
    
    // Reinicializar timeline después de cambiar de página
    const timer = setTimeout(() => {
      if (navRef.current) {
        const tl = createTimeline();
        tlRef.current = tl;
      }
    }, 100);
    
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  const closeMenu = () => {
    setIsHamburgerOpen(false);
    const tl = tlRef.current;
    if (tl) {
      tl.eventCallback("onReverseComplete", () => {
        setIsExpanded(false);
      });
      tl.reverse();
    } else {
      setIsExpanded(false);
      if (navRef.current) {
        gsap.set(navRef.current, { height: 60, overflow: "hidden" });
      }
    }
  };

  const calculateHeight = () => {
    const navEl = navRef.current;
    if (!navEl) return 260;

    const contentEl = navEl.querySelector(".card-nav-content");
    if (contentEl) {
      const wasVisible = contentEl.style.visibility;
      const wasPointerEvents = contentEl.style.pointerEvents;
      const wasPosition = contentEl.style.position;
      const wasHeight = contentEl.style.height;

      contentEl.style.visibility = "visible";
      contentEl.style.pointerEvents = "auto";
      contentEl.style.position = "static";
      contentEl.style.height = "auto";

      contentEl.offsetHeight;

      const topBar = 60;
      const padding = 16;
      const contentHeight = contentEl.scrollHeight;

      contentEl.style.visibility = wasVisible;
      contentEl.style.pointerEvents = wasPointerEvents;
      contentEl.style.position = wasPosition;
      contentEl.style.height = wasHeight;

      return topBar + contentHeight + padding;
    }
    return 260;
  };

  const createTimeline = () => {
    const navEl = navRef.current;
    if (!navEl) return null;

    gsap.set(navEl, { height: 60, overflow: "hidden" });
    gsap.set(cardsRef.current, { y: 50, opacity: 0 });

    const tl = gsap.timeline({ paused: true });

    tl.to(navEl, {
      height: calculateHeight,
      duration: 0.4,
      ease: ease || "power3.out",
    });

    tl.to(
      cardsRef.current,
      {
        y: 0,
        opacity: 1,
        duration: 0.4,
        ease: ease || "power3.out",
        stagger: 0.08,
      },
      "-=0.1"
    );

    return tl;
  };

  useLayoutEffect(() => {
    // Wait for cards to be rendered
    const timer = setTimeout(() => {
      const tl = createTimeline();
      tlRef.current = tl;
    }, 0);

    return () => {
      clearTimeout(timer);
      if (tlRef.current) {
        tlRef.current.kill();
        tlRef.current = null;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ease, items]);

  useLayoutEffect(() => {
    const handleResize = () => {
      if (!tlRef.current) return;

      if (isExpanded) {
        const newHeight = calculateHeight();
        gsap.set(navRef.current, { height: newHeight });

        tlRef.current.kill();
        const newTl = createTimeline();
        if (newTl) {
          newTl.progress(1);
          tlRef.current = newTl;
        }
      } else {
        tlRef.current.kill();
        const newTl = createTimeline();
        if (newTl) {
          tlRef.current = newTl;
        }
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isExpanded]);

  const toggleMenu = () => {
    if (!isExpanded) {
      setIsHamburgerOpen(true);
      setIsExpanded(true);
      // Recreate timeline to ensure cards are in the refs
      setTimeout(() => {
        // Asegurarse de que los refs estén actualizados
        const navEl = navRef.current;
        if (!navEl) return;
        
        const tl = createTimeline();
        if (tl) {
          tlRef.current = tl;
          tl.play(0);
        } else {
          // Si no se puede crear el timeline, intentar de nuevo
          setTimeout(() => {
            const retryTl = createTimeline();
            if (retryTl) {
              tlRef.current = retryTl;
              retryTl.play(0);
            }
          }, 50);
        }
      }, 10);
    } else {
      closeMenu();
    }
  };

  const setCardRef = (i) => (el) => {
    if (el) cardsRef.current[i] = el;
  };

  const handleLinkClick = (e, link) => {
    if (link.external) {
      // Don't prevent default for external links
      closeMenu();
      return;
    }
    // If it's a route (starts with /), let the router handle it
    if (link.href && link.href.startsWith("/")) {
      e.preventDefault();
      closeMenu();
      // Small delay to allow menu to close before navigation
      setTimeout(() => {
        if (onLinkClick) {
          onLinkClick(e, link);
        }
      }, 100);
      return;
    }
    e.preventDefault();
    closeMenu();
    // Small delay to allow menu to close before navigation
    setTimeout(() => {
      if (onLinkClick) {
        onLinkClick(e, link);
      }
    }, 100);
  };

  return (
    <div
      className={`card-nav-container absolute left-1/2 -translate-x-1/2 w-[90%] max-w-[800px] z-99 top-[1.2em] md:top-[2em] ${className}`}
    >
      <nav
        ref={navRef}
        className={`card-nav ${
          isExpanded ? "open" : ""
        } block h-[60px] p-0 rounded-xl shadow-md relative overflow-hidden will-change-[height] backdrop-blur-md bg-white/80`}
        style={{
          backgroundColor: baseColor === "#fff" ? "transparent" : baseColor,
        }}
      >
        <div className="card-nav-top absolute inset-x-0 top-0 h-[60px] flex items-center justify-between p-2 pl-[1.1rem] pr-[1.1rem] z-2">
          <a href="/">
            <div className="logo-container flex items-center gap-2 order-1 md:order-0">
              <img
                src={logo}
                alt={logoAlt}
                className="logo h-[32px] md:h-[36px]"
              />
              <span className="font-mexican text-xl md:text-2xl text-white drop-shadow-md font-bold">
                {brandName}
              </span>
            </div>
          </a>

          <div className="flex items-center gap-4 order-2">
            <button
              type="button"
              className="card-nav-cta-button hidden md:inline-flex border-0 rounded-[calc(0.75rem-0.2rem)] px-4 items-center h-full font-medium cursor-pointer transition-colors duration-300"
              style={{ backgroundColor: buttonBgColor, color: buttonTextColor }}
              onClick={
                onButtonClick ||
                ((e) => {
                  e.preventDefault();
                })
              }
            >
              Reservar
            </button>

            <div
              className={`hamburger-menu ${
                isHamburgerOpen ? "open" : ""
              } group flex flex-col items-center justify-center cursor-pointer gap-[6px] w-8 h-8`}
              onClick={toggleMenu}
              role="button"
              aria-label={isExpanded ? "Close menu" : "Open menu"}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  toggleMenu();
                }
              }}
              style={{ color: menuColor || "#000" }}
            >
              <div
                className={`hamburger-line w-[30px] h-[2px] bg-current transition-[transform,opacity,margin] duration-300 ease-linear origin-[50%_50%] ${
                  isHamburgerOpen ? "translate-y-[4px] rotate-45" : ""
                } group-hover:opacity-75`}
              />
              <div
                className={`hamburger-line w-[30px] h-[2px] bg-current transition-[transform,opacity,margin] duration-300 ease-linear origin-[50%_50%] ${
                  isHamburgerOpen ? "-translate-y-[4px] -rotate-45" : ""
                } group-hover:opacity-75`}
              />
            </div>
          </div>
        </div>

        <div
          className={`card-nav-content absolute left-0 right-0 top-[60px] bottom-0 p-2 flex flex-col items-stretch gap-2 justify-start z-1 ${
            isExpanded
              ? "visible pointer-events-auto"
              : "invisible pointer-events-none"
          } md:flex-row md:items-end md:gap-[12px]`}
          aria-hidden={!isExpanded}
        >
          {(items || []).slice(0, 3).map((item, idx) => {
            const isMas = item.label === "Más";
            
            return (
            <div
              key={`${item.label}-${idx}`}
              className={`nav-card select-none relative flex flex-col gap-2 p-[12px_16px] rounded-[calc(0.75rem-0.2rem)] min-w-0 flex-[1_1_auto] h-auto min-h-[60px] md:h-full md:min-h-0 md:flex-[1_1_0%] ${isMas ? 'hover:brightness-110' : 'cursor-default'}`}              
              ref={setCardRef(idx)}
              style={{ backgroundColor: item.bgColor, color: item.textColor, cursor: item.label === "Más" ? 'pointer' : 'default' }}
              onClick={(e)=>isMas && onLinkClick && onLinkClick(e, item.href || item)}
            >
              <div className="nav-card-label font-normal tracking-[-0.5px] text-[18px] md:text-[22px]">
                {item.label}
              </div>
              <div className="nav-card-links mt-auto flex flex-col gap-[2px]" onClick={(e) => e.stopPropagation()}>
                {item.links?.map((lnk, i) => (
                  <a
                    key={`${lnk.label}-${i}`}
                    className="nav-card-link inline-flex items-center gap-[6px] no-underline cursor-pointer transition-opacity duration-300 hover:opacity-75 text-[15px] md:text-[16px]"
                    href={lnk.href}
                    aria-label={lnk.ariaLabel || lnk.label}
                    onClick={(e) => handleLinkClick(e, lnk)}
                    {...(lnk.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    <GoArrowUpRight
                      className="nav-card-link-icon shrink-0"
                      aria-hidden="true"
                    />
                    {lnk.label}
                  </a>
                ))}
              </div>
            </div>
          );
          })}
        </div>
      </nav>
    </div>
  );
};

export default CardNav;
