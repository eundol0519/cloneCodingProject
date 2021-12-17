// *** Main.jsx ***

import React from "react";
import styled from "styled-components";
import PostDetail from "../pages/PostDetail";
import Post from "../components/Post";
import { history } from "../redux/configureStore";
import { actionCreators as postAtions } from "../redux/modules/post";
import { useDispatch, useSelector } from "react-redux";

import Avatar from "@mui/material/Avatar";
import Grid from "../elements/Grid";
import unnamed from "../unnamed.jpg";
import avata from "../avata.png";
import 다운로드 from "../다운로드.jpg";
//import { getToken } from "../shared/token";

const Main = props => {
  const [postDetailModal, setPostDetailModal] = React.useState(false);
  const dispatch = useDispatch();

  const accessToken = document.cookie.split("=")[1];

  console.log(accessToken);
  React.useEffect(() => {
    window.scrollTo(0, 0);
    if (!accessToken) {
      return history.push("/in/signIn");
    }
    dispatch(postAtions.getPostDB());
  }, [postDetailModal]);

  const postList = useSelector(state => state.post.postList);

  const detailOpen = async postId => {
    await dispatch(postAtions.PostDetailLookUpFB(postId));
    // 동기 처리 -> 비동기 처리를 해줘야 상세 페이지 갔을 때 좋아요가 반영된다.
    setPostDetailModal(true);
  };

  return (
    <React.Fragment>
      <button
        onClick={() => {
          detailOpen(24); // postId 넘겨주기
        }}
      >
        상세 페이지
      </button>
      {postDetailModal && (
        <PostDetail
          modal={postDetailModal}
          setPostDetailModal={setPostDetailModal}
        ></PostDetail>
      )}

      <Box>
        <Container>
          {postList.map((p, idx) => {
            return (
              <ContainerItem key={p.postId}>
                <Post p={p} />
              </ContainerItem>
            );
          })}
        </Container>
        <ItemBox>
          <ItemBoxIn>
            <Profile>
              <ProfileOne>
                <Avatar
                  alt="정하나"
                  src={
                    "https://ca.slack-edge.com/T01L2TNGW3T-U02J6JQU3A8-42ddfd509b3a-512"
                  }
                />
                <Grid is_flex>
                  <span style={{ marginLeft: "10px", fontWeight: "bold" }}>
                    hana-j
                  </span>
                  <span
                    style={{
                      marginLeft: "10px",
                      fontWeight: "bold",
                      fontSize: "15px",
                      color: "dodgerblue",
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      window.open(`https://github.com/hana-j`);
                    }}
                  >
                    팔로우
                  </span>
                </Grid>
              </ProfileOne>
              <ProfileOne>
                <Avatar alt="이동호" src={unnamed} />
                <Grid is_flex>
                  <span style={{ marginLeft: "10px", fontWeight: "bold" }}>
                    TnIoP
                  </span>
                  <span
                    style={{
                      marginLeft: "10px",
                      fontWeight: "bold",
                      fontSize: "15px",
                      color: "dodgerblue",
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      window.open(`https://github.com/TnIoP`);
                    }}
                  >
                    팔로우
                  </span>
                </Grid>
              </ProfileOne>
              <ProfileOne>
                <Avatar alt="라이언" src={avata} />
                <Grid is_flex>
                  <span style={{ marginLeft: "10px", fontWeight: "bold" }}>
                    doyeon8621
                  </span>
                  <span
                    style={{
                      marginLeft: "10px",
                      fontWeight: "bold",
                      fontSize: "15px",
                      color: "dodgerblue",
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      window.open(`https://github.com/doyeon8621`);
                    }}
                  >
                    팔로우
                  </span>
                </Grid>
              </ProfileOne>
              <ProfileOne>
                <Avatar
                  alt="최주영"
                  src={
                    "https://ca.slack-edge.com/T01L2TNGW3T-U02K7HPA1BJ-163062d75326-512"
                  }
                />
                <Grid is_flex>
                  <span style={{ marginLeft: "10px", fontWeight: "bold" }}>
                    cwd3469
                  </span>
                  <span
                    style={{
                      marginLeft: "10px",
                      fontWeight: "bold",
                      fontSize: "15px",
                      color: "dodgerblue",
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      window.open(`https://github.com/cwd3469`);
                    }}
                  >
                    팔로우
                  </span>
                </Grid>
              </ProfileOne>
              <ProfileOne>
                <Avatar alt="오은희" src={다운로드} />

                <Grid is_flex>
                  <span style={{ marginLeft: "10px", fontWeight: "bold" }}>
                    eundol0519
                  </span>
                  <span
                    style={{
                      marginLeft: "10px",
                      fontWeight: "bold",
                      fontSize: "15px",
                      color: "dodgerblue",
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      window.open(`https://github.com/eundol0519`);
                    }}
                  >
                    팔로우
                  </span>
                </Grid>
              </ProfileOne>
              <ProfileOne>
                <Avatar
                  alt="신항민"
                  src={
                    "https://ca.slack-edge.com/T01L2TNGW3T-U02JJ3V9CLT-49c3c240fe6c-512"
                  }
                />
                <Grid is_flex>
                  <span style={{ marginLeft: "10px", fontWeight: "bold" }}>
                    ssinking91
                  </span>
                  <span
                    style={{
                      marginLeft: "10px",
                      fontWeight: "bold",
                      fontSize: "15px",
                      color: "dodgerblue",
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      window.open(`https://github.com/ssinking91`);
                    }}
                  >
                    팔로우
                  </span>
                </Grid>
              </ProfileOne>
            </Profile>
          </ItemBoxIn>
        </ItemBox>
      </Box>
      {/* 
      <Container>
        {postList.map((p, idx) => {
          return (
            <ContainerItem key={idx}>
              <Post p={p} />
            </ContainerItem>
          );
        })}
      </Container>
      <ItemBox /> */}
    </React.Fragment>
  );
};
const Box = styled.div`
  max-width: 934px;
  /* width: 891px; */
  margin: 0 auto;
  display: flex;
`;

const Container = styled.div`
  max-width: 614px;
  /* width: 891px; */
  /* margin: 0 auto; */
  display: flex;
  flex-wrap: wrap;
`;

const ContainerItem = styled.div`
  width: 614px;
  height: 891px;
  margin-bottom: 120px;
`;

const ItemBox = styled.div`
  display: flex;
  max-width: 304px;
  margin-left: 20px;
`;
const ItemBoxIn = styled.div`
  position: fixed;
  width: 304px;
  height: 600px;
`;
const Profile = styled.div`
  display: flex;
  flex-direction: column;
  width: 304px;
  height: 600px;
  margin: 0 auto;
`;
const ProfileOne = styled.div`
  display: flex;
  width: 304px;
  height: 30px;
  padding: 15px 0;
  margin: 0 auto;
  align-items: center;
`;

export default Main;
