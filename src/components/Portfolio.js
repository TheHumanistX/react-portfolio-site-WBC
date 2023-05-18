import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const cardVariants = {
    initial: {
        scale: 1,
        position: "static",
        backgroundColor: "transparent",
    },
    open: {
        scale: 2.5,
        position: "fixed",
        top: "50%",
        left: "50%",
        x: "-50%",
        y: "-50%",
        backgroundColor: "white",
        zIndex: 2,
    },
    hover: {
        backgroundColor: 'rgba(244, 244, 244, 0.3)'
    }
};

const loadVariants = {
    initial: {
        opacity: 0,
        y: '-100vh'
    },
    animate: (index) => ({
        opacity: 1, y: 0,
        transition: {
            delay: index * 0.1,
            type: "spring",
            bounce: 0.4
        }
    }),
};

const backdropVariants = {
    hidden: {
        opacity: 0

    },
    visible: {
        opacity: 1,
        transition: {
            duration: .1
        }
    },
};

const Portfolio = () => {
    const [selectedCard, setSelectedCard] = useState(null);
    const [cardPosition, setCardPosition] = useState({});
    const cardRef = useRef(Array(6).fill(null));

    const handleClick = (cardNumber, cardRef) => {
      if (selectedCard === cardNumber) {
        setSelectedCard(null);
      } else {
        setSelectedCard(cardNumber);
        const rect = cardRef.getBoundingClientRect();
        setCardPosition({ top: rect.top, left: rect.left });
      }
    };
  
    return (
      <section id="portfolio" className="portfolio">
        <h2 className="bold uppercase white center">Portfolio</h2>
        <div className="portfolio__grid-container">
          {Array(6)
            .fill(null)
            .map((_, index) => {
                const isSelected = selectedCard === index + 1;
                return (
                  <React.Fragment key={index}>
                    <motion.div
                      
                      className="project-card"
                      onClick={(e) => handleClick(index + 1, e.currentTarget)}
                      initial="initial"
                      animate="animate"
                      whileHover={selectedCard === null ? "hover" : ""}
                      custom={index}
                      variants={loadVariants}
                      style={isSelected ? { visibility: "hidden" } : {}}
                    >
                      <img
                        src={`https://www.geeksforgeeks.org/wp-content/uploads/${index === 0 || index === 3 ? "html" : index === 1 || index === 4 ? "CSS" : "javascript"
                          }.png`}
                        alt={`Project ${index + 1}`}
                      />
                      <h3 className="bold uppercase">Project {index + 1}</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </motion.div>
                    {isSelected && (
                      <motion.div
                        className="project-card"
                        onClick={() => handleClick(index + 1)}
                    initial={{ ...cardPosition, scale: 1, position: "fixed", zIndex: 2 }}
                    animate="open"
                    variants={cardVariants}
                    style={{ transformOrigin: "50% 50%" }}
                    transition={{
                      duration: 0.5,
                      ease: [0.45, 0, 0.55, 1],
                      translateX: { duration: 0.5, ease: [0.45, 0, 0.55, 1] },
                      translateY: { duration: 0.5, ease: [0.45, 0, 0.55, 1] },
                      scale: { duration: 0.5, ease: [0.45, 0, 0.55, 1] },
                    }}
                  >
                    <img
                      src={`https://www.geeksforgeeks.org/wp-content/uploads/${index === 0 || index === 3 ? "html" : index === 1 || index === 4 ? "CSS" : "javascript"
                        }.png`} alt={`Project ${index + 1}`}
                        />
                        <h3 className="bold uppercase">Project {index + 1}</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                      </motion.div>
                    )}
                  </React.Fragment>
                );
              })}
          </div>
    
          <AnimatePresence>
            {selectedCard && (
              <motion.div
                className="backdrop"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={backdropVariants}
                transition={{ duration: 0.5 }}
                onClick={() => setSelectedCard(null)}
              ></motion.div>
            )}
          </AnimatePresence>
        </section>
      );
    };

    export default Portfolio;