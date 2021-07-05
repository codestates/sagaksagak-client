import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledMainNav = styled.nav`
  box-sizing: border-box;
  width: 100vw;
  max-width: 1200px;
  display: ${props => props.isOnVideoChat ? `none` : `flex`};
  justify-content: space-between;
  align-items: center;
  padding: 0 1.5rem;
  position: absolute;
  top: 0;
  z-index: 2;
  letter-spacing: 1.5px;
  margin: 0 2rem;

  h2 {
    a {
      text-decoration: none;
      color: #225E5C;
    }
  }

  div {
    display: flex;
    column-gap: 6rem;
    justify-content: center;
    align-items: center;
  }

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    text-decoration: none;
    column-gap: 3rem;
    

    li {
      transition: 0.2s;
      button {
        background: transparent;
        border: none;
        font-size: 1rem;
        
        &:hover {
          transform: translateY(-3px);
          cursor: pointer;
          color: #F58820;
        }

      }
      a, button {
        color: #225E5C;
        font-weight: bold;
        text-decoration: none;
      }
      
      &:hover {
        transform: translateY(-3px);
        & a {
          cursor: pointer;
          color: #F58820;
          
        }
      }
    }
  }
`

export default function MainNav( {isLogedIn, isOnVideoChat} ) {
  const handleLogOut = () => {
    //로그아웃 로직 구현
  }

  return (
    <StyledMainNav isOnVideoChat={isOnVideoChat}>
      <h2><Link to='/'>사각사각</Link></h2>
      <div>
        <ul>
          <li><Link to='/'>홈</Link></li>
          <li><Link to='/studyroom'>스터디룸</Link></li>
          <li><Link to='/studylog/todo'>스터디로그</Link></li>
        </ul>
        {isLogedIn ? 
        <ul>
          <li><Link to='/mypage'>마이페이지</Link></li>
          <li onCLick={handleLogOut}><button>로그아웃</button></li>
        </ul>
          :
        <ul>
          <li><Link to='/login'>로그인</Link></li>
          <li><Link to='/signup'>회원가입</Link></li>
        </ul>
        }
      </div>
    </StyledMainNav>
  )
}
