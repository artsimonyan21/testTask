import "./second_sub_menu_content.css";

const SecondSubMenuContent = () => {
  return (
    <div className="second_sub_menu_content">
      <div className="second_sub_menu_colum_1">
        <h5>
          Project Catalog <sup>TM</sup>
        </h5>
        <p>Browse and buy projects that have a clear scope and price.</p>
        <p>
          <a href="#">Browse Project Catalog</a>
          {/* <Arrow /> */}
        </p>
      </div>
      <div className="second_sub_menu_colum_2">
        <div className="second_sub_menu_img_wrapper">
          <div>
            <div>
              <img
                src="https://www.upwork.com/static/assets/TopNavSsi/visitor-v2/img/logo.cd04b531.jpg"
                alt=""
              />
            </div>
            <div className="second_sub_menu_img_title">Logo Design</div>
          </div>
          <div>
            <div>
              <img
                src="https://www.upwork.com/static/assets/TopNavSsi/visitor-v2/img/blog.d73af7fb.jpg"
                alt=""
              />
            </div>
            <div className="second_sub_menu_img_title">
              Articles & Blog Posts
            </div>
          </div>
          <div>
            <div>
              <img
                src="https://www.upwork.com/static/assets/TopNavSsi/visitor-v2/img/wp.1acec44b.jpg"
                alt=""
              />
            </div>
            <div className="second_sub_menu_img_title">WordPress</div>
          </div>
        </div>
        <dir className="second_sub_menu_img_wrapper">
          <div>
            <div>
              <img
                src="https://www.upwork.com/static/assets/TopNavSsi/visitor-v2/img/smm.1a3a67a0.jpg"
                alt=""
              />
            </div>
            <div className="second_sub_menu_img_title">Spcial Media</div>
          </div>
          <div>
            <div>
              <img
                src="https://www.upwork.com/static/assets/TopNavSsi/visitor-v2/img/video.8e2caeb1.jpg"
                alt=""
              />
            </div>
            <div className="second_sub_menu_img_title">Video Editing</div>
          </div>
          <div>
            <div>
              <img
                src="https://www.upwork.com/static/assets/TopNavSsi/visitor-v2/img/seo.bb0c74c3.jpg"
                alt=""
              />
            </div>
            <div className="second_sub_menu_img_title">CEO</div>
          </div>
        </dir>
      </div>
    </div>
  );
};

export default SecondSubMenuContent;
