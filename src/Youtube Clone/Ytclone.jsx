import React from 'react'
import Ytlogo from "./images/images/youtube-logo.png"
import Searchlogo from "./images/icons/search.svg"
import miclogo from "./images/icons/mic.svg"
import videologo from "./images/icons/video-add.svg"
import videologo1 from "./images/icons/dot-grid.svg"
import videologo2 from "./images/icons/bell.svg"
import acccountimg from "./images/images/avatar.png"
import iconbar from "./images/icons/bars.svg"
import iconhome from "./images/icons/home.svg"
import iconexplore from "./images/icons/compass.svg"
import iconsub from "./images/icons/video-gallary.svg"
import iconlibary from "./images/icons/video-library.svg"
import icondot from "./images/icons/dots.svg"
import imgthum from "./images/images/thumbnail.png"



export default function Ytclone() {
    return (
        <>
            <div className="container">

                <aside>
                    <div className="bars">
                        <img src={iconbar} alt="bars" />
                    </div>
                    <div className="side_icon">
                        <i><img src={iconhome} alt="home" /></i>
                        <p>Home</p>
                    </div> <div className="side_icon">
                        <i><img src={iconexplore} alt="explore" /></i>
                        <p>Explore</p>
                    </div> <div className="side_icon">
                        <i><img src={iconsub} alt="subcribtion" /></i>
                        <p>Subcribtion</p>
                    </div>
                    <div className="side_icon">
                        <i><img src={iconlibary} alt="libery" /></i>
                        <p>Libery</p>
                    </div>
                </aside>

                <div className="main_container">
                    <header>
                        <nav>
                            <div className="logo">
                                <img src={Ytlogo} alt="youtube-logo" />
                            </div>
                            <div className="center_nav">
                                <div className="search">
                                    <input className='input' type="text" />
                                    <button className='icon'>
                                        <img src={Searchlogo} alt="search" />
                                    </button>
                                </div>
                                <div className="mic icon">
                                    <img   src={miclogo} alt="mic" />
                                </div>
                            </div>
                            <div className="side_nav">
                                <i><img className="icon" src={videologo} alt="video" /></i>
                                <i><img className="icon" src={videologo1} alt="video" /></i>
                                <img className="search_1" src={Searchlogo} alt="search" />
                                <i><img src={videologo2} alt="video" /></i>
                                <i><img src={acccountimg} alt="video" /></i>

                            </div>
                        </nav>

                        <div className="tags">
                            <div className="tag dark">All</div>
                            <div className="tag light">HTML</div>
                            <div className="tag light">css</div>
                            <div className="tag light">React</div>
                            <div className="tag light">bootstarp</div>
                            <div className="tag light">javascribe</div>
                            <div className="tag light">bootstarp</div>
                            <div className="tag light">javascribe</div>
                            

                        </div>
                    </header>

                    <main>
                        <div className="card_container">

                            <div className="card">
                                <img src={imgthum} alt="thumble" />


                                <div className="avter_content">
                                    <div className="avter">
                                        <img src={acccountimg} alt="account" />
                                    </div>

                                    <div className="content">
                                        <h3> react Tutorial full course</h3>
                                        <p className='channel_name'>Md Ashfak</p>
                                        <div className="content_status">
                                            <p>10M views</p>
                                            <p>today</p>

                                        </div>
                                    </div>
                                    <div className="dots">
                                        <img src={icondot} alt="dot" />
                                    </div>
                                </div>
                            </div>

                            <div className="card">
                                <img src={imgthum} alt="thumble" />


                                <div className="avter_content">
                                    <div className="avter">
                                        <img src={acccountimg} alt="account" />
                                    </div>

                                    <div className="content">
                                        <h3> react Tutorial full course </h3>
                                        <p className='channel_name'>Md Ashfak</p>
                                        <div className="content_status">
                                            <p>10M views</p>
                                            <p>today</p>

                                        </div>
                                    </div>
                                    <div className="dots">
                                        <img src={icondot} alt="dot" />
                                    </div>
                                </div>
                            </div>


                            <div className="card">
                                <img src={imgthum} alt="thumble" />


                                <div className="avter_content">
                                    <div className="avter">
                                        <img src={acccountimg} alt="account" />
                                    </div>

                                    <div className="content">
                                        <h3> react Tutorial full course</h3>
                                        <p className='channel_name'>Md Ashfak</p>
                                        <div className="content_status">
                                            <p>10M views</p>
                                            <p>today</p>

                                        </div>
                                    </div>
                                    <div className="dots">
                                        <img src={icondot} alt="dot" />
                                    </div>
                                </div>
                            </div>

                            <div className="card">
                                <img src={imgthum} alt="thumble" />


                                <div className="avter_content">
                                    <div className="avter">
                                        <img src={acccountimg} alt="account" />
                                    </div>

                                    <div className="content">
                                        <h3> react Tutorial full course</h3>
                                        <p className='channel_name'>Md Ashfak</p>
                                        <div className="content_status">
                                            <p>10M views</p>
                                            <p>today</p>

                                        </div>
                                    </div>
                                    <div className="dots">
                                        <img src={icondot} alt="dot" />
                                    </div>
                                </div>
                            </div>

                            <div className="card">
                                <img src={imgthum} alt="thumble" />


                                <div className="avter_content">
                                    <div className="avter">
                                        <img src={acccountimg} alt="account" />
                                    </div>

                                    <div className="content">
                                        <h3> react Tutorial full course</h3>
                                        <p className='channel_name'>Md Ashfak</p>
                                        <div className="content_status">
                                            <p>10M views</p>
                                            <p>today</p>

                                        </div>
                                    </div>
                                    <div className="dots">
                                        <img src={icondot} alt="dot" />
                                    </div>
                                </div>
                            </div>

                            <div className="card">
                                <img src={imgthum} alt="thumble" />


                                <div className="avter_content">
                                    <div className="avter">
                                        <img src={acccountimg} alt="account" />
                                    </div>

                                    <div className="content">
                                        <h3> react Tutorial full course</h3>
                                        <p className='channel_name'>Md Ashfak</p>
                                        <div className="content_status">
                                            <p>10M views</p>
                                            <p>today</p>

                                        </div>
                                    </div>
                                    <div className="dots">
                                        <img src={icondot} alt="dot" />
                                    </div>
                                </div>
                            </div>


                            <div className="card">
                                <img src={imgthum} alt="thumble" />


                                <div className="avter_content">
                                    <div className="avter">
                                        <img src={acccountimg} alt="account" />
                                    </div>

                                    <div className="content">
                                        <h3> react Tutorial full course</h3>
                                        <p className='channel_name'>Md Ashfak</p>
                                        <div className="content_status">
                                            <p>10M views</p>
                                            <p>today</p>

                                        </div>
                                    </div>
                                    <div className="dots">
                                        <img src={icondot} alt="dot" />
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <img src={imgthum} alt="thumble" />


                                <div className="avter_content">
                                    <div className="avter">
                                        <img src={acccountimg} alt="account" />
                                    </div>

                                    <div className="content">
                                        <h3> react Tutorial full course</h3>
                                        <p className='channel_name'>Md Ashfak</p>
                                        <div className="content_status">
                                            <p>10M views</p>
                                            <p>today</p>

                                        </div>
                                    </div>
                                    <div className="dots">
                                        <img src={icondot} alt="dot" />
                                    </div>
                                </div>
                            </div>

                            <div className="card">
                                <img src={imgthum} alt="thumble" />


                                <div className="avter_content">
                                    <div className="avter">
                                        <img src={acccountimg} alt="account" />
                                    </div>

                                    <div className="content">
                                        <h3> react Tutorial full course</h3>
                                        <p className='channel_name'>Md Ashfak</p>
                                        <div className="content_status">
                                            <p>10M views</p>
                                            <p>today</p>

                                        </div>
                                    </div>
                                    <div className="dots">
                                        <img src={icondot} alt="dot" />
                                    </div>
                                </div>
                            </div>

                            <div className="card">
                                <img src={imgthum} alt="thumble" />


                                <div className="avter_content">
                                    <div className="avter">
                                        <img src={acccountimg} alt="account" />
                                    </div>

                                    <div className="content">
                                        <h3> react Tutorial full course</h3>
                                        <p className='channel_name'>Md Ashfak</p>
                                        <div className="content_status">
                                            <p>10M views</p>
                                            <p>today</p>

                                        </div>
                                    </div>
                                    <div className="dots">
                                        <img src={icondot} alt="dot" />
                                    </div>
                                </div>
                            </div>

                            <div className="card">
                                <img src={imgthum} alt="thumble" />


                                <div className="avter_content">
                                    <div className="avter">
                                        <img src={acccountimg} alt="account" />
                                    </div>

                                    <div className="content">
                                        <h3> react Tutorial full course</h3>
                                        <p className='channel_name'>Md Ashfak</p>
                                        <div className="content_status">
                                            <p>10M views</p>
                                            <p>today</p>

                                        </div>
                                    </div>
                                    <div className="dots">
                                        <img src={icondot} alt="dot" />
                                    </div>
                                </div>
                            </div>

                            <div className="card">
                                <img src={imgthum} alt="thumble" />


                                <div className="avter_content">
                                    <div className="avter">
                                        <img src={acccountimg} alt="account" />
                                    </div>

                                    <div className="content">
                                        <h3> react Tutorial full course</h3>
                                        <p className='channel_name'>Md Ashfak</p>
                                        <div className="content_status">
                                            <p>10M views</p>
                                            <p>today</p>

                                        </div>
                                    </div>
                                    <div className="dots">
                                        <img src={icondot} alt="dot" />
                                    </div>
                                </div>
                            </div>

                            <div className="card">
                                <img src={imgthum} alt="thumble" />


                                <div className="avter_content">
                                    <div className="avter">
                                        <img src={acccountimg} alt="account" />
                                    </div>

                                    <div className="content">
                                        <h3> react Tutorial full course</h3>
                                        <p className='channel_name'>Md Ashfak</p>
                                        <div className="content_status">
                                            <p>10M views</p>
                                            <p>today</p>

                                        </div>
                                    </div>
                                    <div className="dots">
                                        <img src={icondot} alt="dot" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>

                </div>
            </div>
        </>
    )
}
