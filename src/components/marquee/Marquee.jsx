export default function Marquee() {
  return (
    <div className="pxl-marquee pxl-marquee1 style-overlay">
      <div className="pxl-item--container">
        <div className="pxl-item--inner rtl pause-on-hover">

          {/* MAIN */}
          <div className="pxl-item--list main">
            <Item />
            <Item />
          </div>

          {/* DUPLICATE (for infinite loop) */}
          <div className="pxl-item--list duplicate">
            <Item />
            <Item />
          </div>

        </div>
      </div>
    </div>
  );
}

function Item() {
  return (
    <div className="pxl-item--single">
      <div className="pxl-single--inner">
        <div className="pxl-item--text mb-12">
          See how our team combines creativity, technology, and strategy
        </div>
      </div>
    </div>
  );
}