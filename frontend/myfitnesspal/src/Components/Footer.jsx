import React from 'react'
import style from "../Styling/Footer.module.css"

const Footer = () => {
  return (
    <>
      <div className={style.Fu1}>
        <div className={style.Fu2}>
          <div className={style.Fu3}>
            <p className={style.tag}>
              <a href="">Calorie Counter</a>
            </p>
            <p className={style.tag}>
              <a href="">Blog</a>
            </p>
            <p className={style.tag}>
              <a href="">Terms</a>
            </p>
            <p className={style.tag}>
              <a href="">Privacy</a>
            </p>
            <p className={style.tag}>
              <a href="">Contact Us</a>
            </p>
            <p className={style.tag}>
              <a href="">API</a>
            </p>
            <p className={style.tag}>
              <a href="">Blog</a>
            </p>
            <p className={style.tag}>
              <a href="">Jobs</a>
            </p>
            <p className={style.tag}>
              <a href="">Feedback</a>
            </p>
            <p className={style.tag}>
              <a href="">Community Guidelines</a>
            </p>
            <p className={style.tag}>
              <a href="">Ad Choices</a>
            </p>
            <p className={style.tag}>
              <a href="">Do Not Self My Personal Information</a>
            </p>
          </div>
          <div className={style.Fu4}>
            <select className="select">
              <option value="">English</option>
              <option value="">Bengali</option>
              <option value="">Albanian</option>
              <option value="">Bambara</option>
              <option value="">chinese</option>
              <option value="">中文(台灣)</option>
              <option value="">french</option>
              <option value="">Greek</option>
              <option value="">日本語</option>
              <option value="">Italian</option>
              <option value="">japanese</option>
            </select>
          </div>
        </div>
        <div className={style.Fu5}>
          <p>© 2022 MyFitnessPal, Inc.</p>
        </div>
      </div>
    </>
  );
}

export default Footer