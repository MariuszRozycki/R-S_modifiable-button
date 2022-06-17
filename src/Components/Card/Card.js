import React, { Fragment } from "react";

import './Style/style.css';

import { CardWrapper, Image, CardHeader, CardIntro, ShowMore, Menu, MenuLink, ContentWrapper } from './index';


function Card({ title, intro, showMore, content }) {

  return (
    <Fragment>
      <CardWrapper>
        <Menu>
          <MenuLink to="/" label='Home'></MenuLink>
          <MenuLink to="/about" label='About'></MenuLink>
          <MenuLink to="/contact" isActive label='Contact'></MenuLink>
          <MenuLink to="/posts" label='Posts'></MenuLink>
        </Menu>
        <ContentWrapper>
          <CardHeader title={title} />
          <Image />
          <CardIntro intro={intro} />
          <ShowMore showMore={showMore} content={content} />
        </ContentWrapper>
      </CardWrapper>
    </Fragment>
  )
}

export default Card;