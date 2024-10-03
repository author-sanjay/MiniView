import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./ReactResponsivePreview.css";

const ReactResponsivePreview = ({
  targetWidth,
  targetHeight,
  containerWidth,
  containerHeight,
  isSizePx = false,
  isSizeVh = false,
  isSizeVw = false,
  children, 
}) => {
  const [scale, setScale] = useState(1);

  const calculateActualSize = (size, isPx, isVh, isVw) => {
    if (isPx) {
      return size; 
    } else if (isVh) {
      return (window.innerHeight * size) / 100; 
    } else if (isVw) {
      return (window.innerWidth * size) / 100; 
    }
    return size; 
  };

  useEffect(() => {
    if (!targetWidth || !targetHeight) return;

    const actualContainerWidth = calculateActualSize(
      containerWidth,
      isSizePx,
      isSizeVh,
      isSizeVw
    );
    const actualContainerHeight = calculateActualSize(
      containerHeight,
      isSizePx,
      isSizeVh,
      isSizeVw
    );
    const scaleX = actualContainerWidth / targetWidth;
    const scaleY = actualContainerHeight / targetHeight;

    setScale(Math.min(scaleX, scaleY));
  }, [
    targetWidth,
    targetHeight,
    containerWidth,
    containerHeight,
    isSizePx,
    isSizeVh,
    isSizeVw,
  ]);

  return (
    <div
      className="preview-container"
      style={{
        width: `${containerWidth}${
          isSizePx ? "px" : isSizeVh ? "vh" : isSizeVw ? "vw" : ""
        }`,
        height: `${containerHeight}${
          isSizePx ? "px" : isSizeVh ? "vh" : isSizeVw ? "vw" : ""
        }`,
      }}
    >
      <div
        className="preview-content"
        style={{
          width: `${targetWidth}px`,
          height: `${targetHeight}px`,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
        }}
      >
        <div className="preview-item">
          {children}
        </div>
      </div>
    </div>
  );
};

ReactResponsivePreview.propTypes = {
  targetWidth: PropTypes.number.isRequired,
  targetHeight: PropTypes.number.isRequired,
  containerWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  containerHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  isSizePx: PropTypes.bool,
  isSizeVh: PropTypes.bool,
  isSizeVw: PropTypes.bool,
  children: PropTypes.node, 
};

ReactResponsivePreview.defaultProps = {
  containerWidth: window.innerHeight, 
  containerHeight: window.innerHeight * 0.8, 
  isSizePx: false,
  isSizeVh: true, 
  isSizeVw: false,
};

export default ReactResponsivePreview;
