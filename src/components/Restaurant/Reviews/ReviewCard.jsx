import React, { useState, useEffect } from "react";
import { TiStarFullOutline } from "react-icons/ti";
import dayjs from "dayjs";

// Redux
import { useDispatch } from "react-redux";
import { getUser } from "../../../redux/reducers/user/user.action";

function ReviewCard(props) {
  const [user, setUser] = useState("");
  console.log(props);

  const dispatch = useDispatch();

  useEffect(() => {
    if (props) {
      dispatch(getUser(props.user)).then((data) => {
        setUser(data.payload.user.fullName);
      });
    }
  }, []);

  const avatars=["https://media.istockphoto.com/photos/indian-corporate-woman-stock-photos-picture-id1166369288?k=20&m=1166369288&s=170667a&w=0&h=phCqttibGA4K-986TbRusX-FMcUx9yI3EK9yOuiThDQ=","https://restaurantindia.s3.ap-south-1.amazonaws.com/s3fs-public/content9670.jpg","https://www.discoverwalks.com/blog/wp-content/uploads/2020/10/800px-prime_minister_shri_narendra_modi_in_new_delhi_on_august_08_2019_cropped.jpg","https://static.boredpanda.com/blog/wp-content/uploads/2019/02/beautiful-indians-local-people-magdalena-bagrianow-india-fb__700-png.jpg","https://i.pinimg.com/originals/19/84/02/198402b9e80b2537138fc86cf07c2fdd.jpg","https://media.istockphoto.com/photos/indian-girl-with-phone-picture-id1049317672?b=1&k=20&m=1049317672&s=170667a&w=0&h=WN1M-zlumu_enpbjPqSL3qzmIzK0bF5dA9vPaCb-8Mw=","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStcXjmMFW9XFnyg17btxcsPhCIElZt5HnQMw&usqp=CAU","https://files.erasmusmagazine.nl/app/uploads/sites/8/2017/11/02175451/foto-interview-ivar-1280x853.jpg","https://us.123rf.com/450wm/mnsanthoshkumar/mnsanthoshkumar1411/mnsanthoshkumar141100019/33424624-happy-smiling-indian-male-or-latin-american-man-the-person-can-also-represent-a-south-asian-or-a-mex.jpg?ver=6","https://www.thefamouspeople.com/profiles/thumbs/virat-kohli-1.jpg","https://hwnews.in/wp-content/uploads/2019/04/MS-Dhoni.jpg","https://www.mckinsey.com/~/media/mckinsey/locations/asia/india/careers/our%20people/raman/india_careers_raman-sharma_quote-profile_1536x1152.jpg?mw=1536&car=48:59&cpx=Left&cpy=Top"];
  const rand=Math.floor(Math.random()*avatars.length);
const randAvatar=avatars[rand];
  return (
    <>
      <div className="my-3 flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full">
              
              <img
                src={randAvatar}
                alt="avatar"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <h3 className="text-lg font-semibold">{user}</h3>
              {/* <small className="text-gray-500">
                5 Reviews &#8226; 3 Followers
              </small> */}
            </div>
          </div>
          <button className="text-zomato-400 border border-zomato-400 py-2 rounded-lg px-4">
            Follow
          </button>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <span className="text-white text-xs bg-green-700 px-2 py-1 rounded-lg flex items-center gap-1">
              {props.rating} <TiStarFullOutline />
            </span>
            <h5 className="font-regular uppercase">
              {props.isRestaurantReview ? "Dining" : "Delivery"}
            </h5>
            <small className="text-gray-500">
              {dayjs(props.createdAt).format("DD-MM-YYYY")}
            </small>
          </div>
          <div className="w-full">
            <p className="w-full text-gray-600 font-light text-base">
              {props.reviewText}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ReviewCard;
