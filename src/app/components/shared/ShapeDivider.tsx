// ShapeDivider.js

const ShapeDivider = () => {
  return (
    <div className="ux-shape-divider ux-shape-divider--bottom ux-shape-divider--style-waves-opacity-3 relative">
      <svg
        viewBox="0 0 1000 100"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="absolute bottom-0 left-0 w-full"
      >
        <path
          className="ux-shape-fill"
          opacity="0.3"
          fill="#000"
          d="M1014 64V186H206L34 100C34 100 344.42 77.16 436 21C542 56 590 60 704 109C811 155 899.11 114.94 979 246L1014 164Z"
        ></path>
        <path
          className="ux-shape-fill"
          opacity="0.5"
          fill="#000"
          d="M-302 0C-302 0 -66.73 208.25 50 159C178 105 283 61 353 86C445.68 119.1 534.28 201.19 588 194C692.9 180 764.52 20.94 855 76C940.61 128.09 1000 199 1000 199V273L-306 283L-302 0Z"
        ></path>
        <path
          className="ux-shape-fill"
          opacity="0.7"
          fill="#000"
          d="M-286 100C-286 100 -72 0 52 -26C176 -52 255 3 436 75C581.57 132.91 614.7 125.79 708 75C787 32 1009 -148 1093 13C1146 114.63 1031 142 1031 142L924 226L-288 238L-286 100Z"
        ></path>
        <path
          className="ux-shape-fill"
          opacity="0.9"
          fill="#000"
          d="M-24 0C-24 0 275.68 301.66 389 245C397 241 622 247 673 287C690.47 300.7 845 155 890 113C944.8 61.85 1018 23 1078 74C1154.12 138.7 1196 173 1196 173L1184 305L-28 317L-24 0Z"
        ></path>
        <path
          className="ux-shape-fill"
          fill="#000"
          d="M-12 131C-12 131 58 214 182 188C306 162 342.29 151.23 456 194C565 235 640.82 218.36 721 179C776 152 837.5 121.31 935 183C984 214 1030 209 1030 209L1024 360L-12 370V131Z"
        ></path>
      </svg>
    </div>
  );
};

export default ShapeDivider;
