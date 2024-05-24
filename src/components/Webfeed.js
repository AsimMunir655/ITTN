import React, { useState, useEffect } from "react";
import axios from "axios";
import "video-react/dist/video-react.css";
import { Modal, ModalTitle } from "react-bootstrap";
import Swal from "sweetalert2";
import { FacebookShareButton, WhatsappShareButton } from "react-share";
import { FacebookIcon, WhatsappIcon } from "react-share";

const Webfeed = (props) => {
  const openCommentModal = (post) => {
    const arr = post.comments;
    setComments(arr.reverse());
    setPostId(post.id);
    setShowModal(true);
  };
  const openLikeModal = (post) => {
    likePost(post.id);
    setPostId(post.id);
    getPosts();
  };
  const openSupportModalll = (post) => {
    supportPost(post.id);
    setPostId(post.id);
    getPosts();
  };
  const [user_id, setUserId] = useState(localStorage.getItem("user_id"));
  const [posts, setPosts] = useState([]);
  const [post_id, setPostId] = useState("");
  const [showModallll, setShowModallll] = useState(false);
  const [showModall, setShowModall] = useState(false);
  const [showModalll, setShowModalll] = useState(false);
  const [value, setValue] = useState("");
  const [login] = useState(localStorage.getItem("token") ? true : false);
  const [comments, setComments] = useState([]);
  const [likes, setLikes] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [support, setsupport] = useState([]);
  const [support_like, setSupportLike] = useState(false);
  const [like, setLike] = useState(false);

  const checkLiked = (likes) => {
    var status = false;
    /* eslint-disable */
    likes.map((like) => {
      status = false;
      setLike(false);
      if (like.id === user_id) {
        status = true;
        console.log("liked");
        setLike(status);
      }
    });
  };
  const checkedSupport = (supports) => {
    /* eslint-disable */
    var status = false;
    supports.map((support) => {
      status = false;
      setSupportLike(false);
      if (support.id === user_id) {
        status = true;
        setSupportLike(status);
      }
    });
  };

  const getPosts = async () => {
    try {
      var response = await axios.get(
        "https://iitn.herokuapp.com/v1/feed/allFeed"
      );

      if (response.status === 200) {
        setPosts(response.data.feeds);
        setLikes(response.data.feeds[0].like.user);
        setsupport(response.data.feeds[0].support.user);
        checkedSupport(response.data.feeds[0].support.user);
        checkLiked(response.data.feeds[0].like.user);

        console.log("====================================");
        console.log(response.data.feeds[0].image[0]);
        console.log("====================================");
      }
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    console.log(props);
    getPosts();
  }, []);
  const CommentPost = async () => {
    if (value === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "please enter comment",
        footer: '<a href="">Why do I have this issue?</a>',
      });
      return;
    }
    if (!login) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "please login your account",
        footer: '<a href="">Why do I have this issue?</a>',
      });
      return;
    }
    try {
      let url =
        "https://iitn.herokuapp.com/v1/feed/addComment?feedId=" + post_id;
      let options = {
        method: "POST",
        url: url,
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        data: { comment: value },
      };
      var response = await axios(options);

      if (response.status === 200) {
        setShowModal(false);
        getPosts();
        setValue("");
      }
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getPosts();
  }, []);
  const likePost = async (feedId) => {
    if (!login) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "please login your account",
        footer: '<a href="">Why do I have this issue?</a>',
      });
      return;
    }
    try {
      let url = "https://iitn.herokuapp.com/v1/feed/likeFeed?feedId=" + feedId;
      let options = {
        method: "POST",
        url: url,
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      };
      var response = await axios(options);
      if (!user_id) {
        localStorage.setItem(
          "user_id",
          response.data.like.user[response.data.like.user.length - 1].id
        );
        setUserId(
          response.data.like.user[response.data.like.user.length - 1].id
        );
      }
      if (response.status === 200) {
        await getPosts();
        setPostId("");
        setTimeout(() => {
          setShowModall(true);
        }, 500);
      }
    } catch (e) {
      console.log(e);
    }
  };
  const supportPost = async (feedId) => {
    if (!login) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "please login your account",
        footer: '<a href="">Why do I have this issue?</a>',
      });
      return;
    }
    try {
      let url =
        "https://iitn.herokuapp.com/v1/feed/supportFeed?feedId=" + feedId;
      let options = {
        method: "POST",
        url: url,
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      };
      var response = await axios(options);
      if (!user_id) {
        localStorage.setItem(
          "user_id",
          response.data.support.user[response.data.support.user.length - 1].id
        );
        setUserId(
          response.data.support.user[response.data.support.user.length - 1].id
        );
      }
      if (response.status === 200) {
        await getPosts();
        setPostId("");
        setTimeout(() => {
          setShowModalll(true);
        }, 500);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const openShareModal = () => {
    if (!login === true) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "please login your account",
        footer: '<a href="">Why do I have this issue?</a>',
      });
    } else {
      setShowModallll(true);
    }
  };

  return (
    <div className="webfeed">
      <Modal
        show={showModallll}
        onHide={() => {
          setShowModal(false);
        }}
      >
        <img
          onClick={() => {
            setShowModallll(false);
            // setShowheader(false);
          }}
          className="close_img"
          src="/images/close.svg"
          alt=""
        />
        <FacebookShareButton
          url={
            "https://up4changevone.s3.ap-southeast-2.amazonaws.com/function+now%28%29+%7B+%5Bnative+code%5D+%7D-feed-pic.mp4"
          }
          description={"aiueo"}
          className="Demo__some-network__share-button mb-3 mt-3"
        >
          <FacebookIcon size={32} round /> Facebook
        </FacebookShareButton>
        <WhatsappShareButton
          url={
            "https://up4changevone.s3.ap-southeast-2.amazonaws.com/function+now%28%29+%7B+%5Bnative+code%5D+%7D-feed-pic.mp4"
          }
          description={"aiueo"}
          className="Demo__some-network__share-button"
        >
          <WhatsappIcon size={32} round /> Whatsapp
        </WhatsappShareButton>
        <br />
      </Modal>
      <Modal
        show={showModal}
        onHide={() => {
          setShowModal(false);
        }}
      >
        <img
          onClick={() => {
            setShowModal(false);
            // setShowheader(false);
          }}
          className="close_img"
          src="/images/close.svg"
          alt=""
        />
        <ModalTitle className="mb-3"> Comments</ModalTitle>
        {login === true ? (
          <div>
            <input
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              name="newPassword"
              className="mt-2 signup_inputs width_input w-100"
              placeholder="Enter comment"
            />
            <button onClick={CommentPost} className="logbtnf mt-2 ml-1 mb-3">
              Add Comment
            </button>
          </div>
        ) : null}
        {comments.map((comment) => {
          return (
            <p className="comment">
              <strong className="comment_user">{comment.user.username}</strong>
              {comment.comment}
            </p>
          );
        })}
      </Modal>
      <Modal
        show={showModall}
        onHide={() => {
          setShowModall(false);
        }}
      >
        <img
          onClick={() => {
            setShowModall(false);
            // setShowheader(false);
          }}
          className="close_img"
          src="/images/close.svg"
          alt=""
        />
        <ModalTitle className="mb-3">Likes</ModalTitle>
        {likes.map((like) => {
          return (
            <>
              <strong className="comment comment_user">{like.username}</strong>
            </>
          );
        })}
      </Modal>
      <Modal
        show={showModalll}
        onHide={() => {
          setShowModalll(false);
        }}
      >
        <img
          onClick={() => {
            setShowModalll(false);
            // setShowheader(false);
          }}
          className="close_img"
          src="/images/close.svg"
          alt=""
        />
        <ModalTitle className="mb-3">Supports</ModalTitle>
        {support.map((support) => {
          return (
            <>
              <strong className="comment comment_user">
                {support.username}
              </strong>
            </>
          );
        })}
      </Modal>
      <p className="keeping_up_tittle mt-5">Web Feed</p>
      <p className="orignal-content w-50 text-center ml-auto mr-auto">
        From 3pm to 9pm, every Thursday and Friday, we’ll be showing all things
        entertainment from music, shows, short films, podcasts, sports, news and
        so much more!
      </p>
      {posts.length > 0 ? (
        <>
          <div className="video-section">
            <video className="videoo" controls>
              <source src={posts[0].image} type="video/mp4" />
            </video>
            {/* <Player
              loop
              autoplay
              controls="true"
              className="webfeed-img mt-4 mb-4 video-background"
            >
              <source className="plyars" type="video/mp4" />
            </Player> */}

            <div className="social-items">
              <div
                onClick={(el) => {
                  openLikeModal(posts[0]);
                }}
                className="social"
              >
                {!like && login ? (
                  <div className="d-flex align-items-center">
                    <img className="kiki" src="/images/liked.svg" alt="" />
                    <p className="mb-0 ml-1 yyy">{likes.length}Like</p>
                  </div>
                ) : (
                  <div className="d-flex align-items-center">
                    <img
                      className="social_img ml-1"
                      src="/images/likee.svg"
                      alt=""
                    />
                    <p className="jsl mt-1 ml-1">{likes.length}Like</p>
                  </div>
                )}
              </div>
              <div
                onClick={(el) => {
                  openCommentModal(posts[0]);
                  // setShowheader(false);
                }}
                className="social"
              >
                <img className="social_img" src="/images/Group 89.svg" alt="" />
                <p className="jsl mt-1 mr-1">{posts[0].comments.length}</p>
                <div className="social_item">Comment</div>
              </div>
              <div
                onClick={() => {
                  openShareModal();
                  // setShowheader(false);
                }}
                className="social"
              >
                <img
                  className="social_img mr-2"
                  src="/images/share.svg"
                  alt=""
                />
                <div className="share">Share</div>
              </div>

              <div
                onClick={(el) => {
                  openSupportModalll(posts[0]);
                }}
                className="social"
              >
                {!support_like && login ? (
                  <div className="item_support">
                    <img
                      className="social-img mr-1"
                      src="/images/support.svg"
                      alt=""
                    />
                    <p className="d-flex yyy mb-0 mr-1">
                      {posts[0].support.count}
                    </p>
                    <div className="yyy">Support</div>
                  </div>
                ) : (
                  <div className="item_support">
                    <img
                      className="social-img mr-1"
                      src="/images/suport2.svg"
                      alt=""
                    />
                    <p className="d-flex jsl mb-0 mr-1">
                      {posts[0].support.count}
                    </p>
                    <div className="social_item">Support</div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Webfeed;
