import { useNavigate } from "react-router";

// category
const category = [
  {
    image:
      "https://ouch-cdn2.icons8.com/07ua_pwMjSYA2fvz1eLn3b2PUUUtjMzRKSL4nl-08To/rs:fit:368:368/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvNzM4/LzhkMTUwNjIzLTYx/YmQtNDg3YS05MDFm/LTEyMzJiNGNmMGNm/Zi5zdmc.png",
    name: "fashion",
  },
  {
    image:
      "https://ouch-cdn2.icons8.com/mBKd19vmkklGvZGtGH_I5V2pRdqZVV98YynmWeCHCP4/rs:fit:368:347/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMjA4/L2IxNmI5ZTM2LWI4/NjAtNGFhMS04NTA1/LTdmYTU1YTAxOGMw/Ny5wbmc.png",
    name: "shirt",
  },
  {
    image:
      "https://ouch-cdn2.icons8.com/EkBNHul9ufpSB69zVG8zgw_wWd7rT8W00p6GJ7HV0Cg/rs:fit:368:386/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvMTgz/L2RlMjllOTE2LWQy/NWUtNDFlMy04YWVm/LTc4ZTQ1ZjA1OWVi/OS5zdmc.png",
    name: "jacket",
  },
  {
    image:
      "https://ouch-cdn2.icons8.com/S6pb2YVRXWKuapDrjljXXHoqUI5fV0p2EOLuX9bFCvw/rs:fit:368:417/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNTQv/ZWI5NjQ2ODAtY2Rh/OS00ZmU5LTgyNTAt/ZGI2YjM1MzA1OTY4/LnBuZw.png",
    name: "mobile",
  },
  {
    image:
      "https://ouch-cdn2.icons8.com/e836HGAbdqycpRhh05X_lu-CB40iUiO2tYNmqTX2ff0/rs:fit:368:331/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvODY0/LzU4NDZhYTQyLWVk/YTgtNGIyNi05NDQ3/LTgyOTRhOTQ5NjJk/Mi5wbmc.png",
    name: "laptop",
  },
  {
    image:
      "https://ouch-cdn2.icons8.com/Zh5jCRheACZ4etjHNewvufwd0v3DqPxA_Xdw1junHk8/rs:fit:368:300/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMTI4/LzU1YzgwZjg0LTk0/YWItNGFkYi04NDU5/LTMwMTRhMmQ4ZTMx/NS5wbmc.png",
    name: "shoes",
  },
  {
    image:
      "https://ouch-cdn2.icons8.com/DSyQAYJUNimWafZl6r5PzEnZsetj_X142ZxgsqDQ-7Q/rs:fit:368:368/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMzg2/L2Y3ZGFlZTkzLTdj/ZjQtNDZmYS04ZjNm/LTI2ZjhiZDYyZDlm/My5wbmc.png",
    name: "home",
  },
  {
    image:
      "https://ouch-cdn2.icons8.com/8J4yKZE8nQfVY9izQMbF5znyoc9iHxye4jvDzjAFefs/rs:fit:368:368/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMzcw/LzQ2YWZjMzdiLTAx/MWMtNGYyYi1hNjFm/LTMzMWUxODQ0MjMy/YS5wbmc.png",
    name: "books",
  },
];

const Category = () => {
  // naviaget
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex flex-col mt-5">
        {/* main 1 */}
        <div className="flex overflow-x-scroll lg:justify-center  hide-scroll-bar">
          {/* main 2  */}
          <div className="flex ">
            {/* category  */}
            {category.map((item, index) => {
              return (
                <div key={index} className="px-3 lg:px-10">
                  {/* Image  */}
                  <div
                    onClick={() => navigate(`/category/${item.name}`)}
                    className=" w-16 h-16 lg:w-24 lg:h-24 max-w-xs rounded-full  bg-pink-500 transition-all hover:bg-pink-400 cursor-pointer mb-1 "
                  >
                    <div className="flex justify-center mb-12">
                      {/* Image tag  */}
                      <img src={item.image} alt="img" />
                    </div>
                  </div>

                  {/* Name Text  */}
                  <h1 className=" text-sm lg:text-lg text-center font-medium title-font first-letter:uppercase ">
                    {item.name}
                  </h1>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* style  */}
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n.hide-scroll-bar {\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n}\n.hide-scroll-bar::-webkit-scrollbar {\n  display: none;\n}\n",
        }}
      />
    </div>
  );
};

export default Category;
