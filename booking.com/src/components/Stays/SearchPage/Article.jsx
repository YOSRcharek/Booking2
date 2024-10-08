import React from 'react';
import './assets/css/style.css'; 
import bannerImage from './assets/images/article-banner.png'; 


function Article() {
    return (
       <div className="article-pg">
            <header className="mt-0 pt-0 bg-cover clearfix pt-3">
                <div class="bg-cover clearfix pt-3">
                 </div>
            </header>
            <div className="container-fluid ar-content">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 pr-5">
                            <div className="card ar-img-over">
                                <img className="card-img" src={bannerImage} alt="" />
                                <div className="card-img-overlay">
                                      <a href="#" class="d-flex align-items-center justify-content-center">
                                      <img src="assets/images/full-screen.png" alt="" />

                                            </a>
                                </div>
                            </div>
                            <div class="row date-time mt-3">
        
                                <div class="col text-white">
                                    <a href="#"> <i class="fas fa-retweet"></i> Share</a>
                                </div>
                                <div class="col text-right"><a href="#"> June 3, 2019 &nbsp; 6 <i
                                            class="far fa-comments"></i></a></div>
                            </div>
        
                            <h2>Lorem ipsum dolor sit amet, consectetur.</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et
                                dolore magna aliqua. Idque Caesaris facere voluntate liceret: sese habere. Magna pars studiorum,
                                prodita quaerimus. Magna pars studiorum, prodita quaerimus. Fabio vel iudice vincam, sunt in
                                culpa qui officia. Vivamus sagittis lacus vel augue laoreet rutrum faucibus.</p>
        
                            <div class="media my-5">
                                <div class="q-box d-flex align-items-center justify-content-center">
                                    <img src="assets/images/quote.png" alt=""/>
                                    </div>
                                <div class="bbg media-body">
                                    <h5 class="mb-0">Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor
                                        incidunt ut labore et dolore magna aliqua.</h5>
        
                                </div>
                            </div>
        
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et
                                dolore magna aliqua. Idque Caesaris facere voluntate liceret: sese habere. Magna pars studiorum,
                                prodita quaerimus. Magna pars studiorum, prodita quaerimus. Fabio vel iudice vincam, sunt in
                                culpa qui officia. Vivamus sagittis lacus vel augue laoreet rutrum faucibus.blandit praesent
                                luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta
                                nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum.
                                Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem.
                                Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est
                                etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam
                                littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per
                                seacula quarta decima et quinta decima. </p>
        
                            <p> Eodem modo typi, qui nunc nobis videntur parum Nam liber tempor cum soluta nobis eleifend option
                                congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent
                                claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes
                                demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus
                                dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica,
                                quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta
                                decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes
                                in futurum.
                            </p>
                            <h2 class="text-center fs-35 mt-5 pt-5 mb-0 pb-2">Related Articles</h2>
                            <hr class="mt-0 pt-0" />
                            <p class="text-center second-clr my-5">Nam liber tempor cum soluta nobis eleifend option congue
                                nihil imperdiet doming id quod
                                mazim placerat facer possim assum.</p>
        
                            <div class="row">
                                <div class="col-md-6">
                                    <img src="assets/images/ar-left.png" class="w-100" alt="" />
                                    <p class="img-tag text-center">LIFESTYLE</p>
                                    <hr class="mt-0" />
                                    <h3 class="text-center">Inside a Surf Champion’s World</h3>
        
                                    <ul class="nav nav-fill mx-auto pb-3">
                                        <li class="nav-item">
                                            <a class="nav-link" href="#">By John Doe</a>
                                        </li>
                                        <li><span>.</span></li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#">10 Oct 2016</a>
                                        </li>
                                        <li><span>.</span></li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#">12 Comments</a>
                                        </li>
        
        
                                    </ul>
                                    <p class="second-clr text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        In laoreet, enim nec venenatis luctus, lectus dolor accumsan magna, non rhoncus.</p>
        
                                    <a href="#" class="btn text-uppercase text-center mx-auto">Read More</a>
        
                                </div>
                                <div class="col-md-6 mt-md-4">
                                    <img src="assets/images/ar-right.png" class="w-100" alt="" />
                                    <p class="img-tag text-center">FASHION</p>
                                    <hr class="mt-0" />
                                    <h3 class="text-center">10 Places in France Every
                                        Woman Should Go</h3>
        
                                    <ul class="nav nav-fill mx-auto pb-3">
                                        <li class="nav-item">
                                            <a class="nav-link" href="#">By John Doe</a>
                                        </li>
                                        <li><span>.</span></li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#">10 Oct 2016</a>
                                        </li>
                                        <li><span>.</span></li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#">12 Comments</a>
                                        </li>
        
        
                                    </ul>
                                    <p class="second-clr text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        In laoreet, enim nec venenatis luctus, lectus dolor accumsan magna, non rhoncus.</p>
        
                                    <a href="#" class="btn text-uppercase text-center mx-auto">Read More</a>
                                </div>
                            </div>
                            <div class="comment-section mt-5">
                                <h3>3 Comments</h3>
                                <hr class="ml-0" />
                                <div class="media pt-5">
                                    <div class="card mr-4">
                                        <img src="assets/images/comment-user1.png" alt="" class="card-img" />
                                        <div class="card-img-overlay">
        
                                        </div>
                                    </div>
        
                                    <div class="media-body">
                                        <div class="row">
                                            <div class="col text-left">
                                                <h4>John Deo</h4>
                                            </div>
                                            <div class="col text-right">
                                                <p class="my-0"><span>Add 11 Oct 2016</span> <a href="#" class="ml-3">Reply</a>
                                                </p>
                                            </div>
                                        </div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fringilla massa et
                                            tristique convallis. Class aptent taciti sociosqu ad litora torquent per conubia
                                            nostra, per inceptos himenaeos. Suspendisse orci sem, ultrices sit amet cursus
                                            vitae, fermentum nec turpis.</p>
                                        <div class="media py-5 mt-5 both-border">
                                            <div class="card mr-4">
                                                <img src="assets/images/comment-user2.png" alt="" class="card-img"/>
                                                <div class="card-img-overlay">
        
                                                </div>
                                            </div>
                                            <div class="media-body">
                                                <div class="row">
                                                    <div class="col text-left">
                                                        <h4>Jen Smith</h4>
                                                    </div>
                                                    <div class="col text-right">
                                                        <p class="my-0"><span>Add 11 Oct 2016</span> <a href="#"
                                                                class="ml-3">Reply</a></p>
                                                    </div>
                                                </div>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fringilla
                                                    massa et tristique convallis. Class aptent taciti sociosqu ad litora
                                                    torquent per conubia nostra, per inceptos himenaeos. Suspendisse orci sem,
                                                    ultrices sit amet cursus vitae, fermentum nec turpis.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
        
        
        
                                <div class="media py-5 bottom-border">
                                    <div class="card mr-4">
                                        <img src="assets/images/comment-user3.png" alt="" class="card-img" />
                                        <div class="card-img-overlay">
        
                                        </div>
                                    </div>
        
                                    <div class="media-body">
                                        <div class="row">
                                            <div class="col text-left">
                                                <h4>John Deo</h4>
                                            </div>
                                            <div class="col text-right">
                                                <p class="my-0"><span>Add 11 Oct 2016</span> <a href="#" class="ml-3">Reply</a>
                                                </p>
                                            </div>
                                        </div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fringilla massa et
                                            tristique convallis. Class aptent taciti sociosqu ad litora torquent per conubia
                                            nostra, per inceptos himenaeos. Suspendisse orci sem, ultrices sit amet cursus
                                            vitae, fermentum nec turpis.</p>
        
                                    </div>
                                </div>
        
        
                            </div>
                            <div class="comment-form my-5 pt-5">
                                <h3>Add Comments</h3>
                                <hr class="ml-0" />
                                <hr class="s-br" />
                                <table class="table table-borderless mt-4">
                                    <tr>
                                        <td><input type="text" class="form-control" placeholder="Name" /></td>
                                        <td><input type="email" class="form-control" placeholder="Email" /> </td>
                                        <td><input type="url" class="form-control" placeholder="Website" /> </td>
                                    </tr>
                                    <tr>
                                        <td colspan="3"><textarea class="form-control" placeholder="Your comment"></textarea>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="3"><button class="btn text-uppercase ml-auto d-block">Add Comment</button>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                        <div className="col-lg-3 pl-0">
                            <div class="sidebar">
                                <h3 class="text-center text-white">Top Authors</h3>
                                <hr class="bg-white" />
        
                                <div class="owl-carousel owl-carousel4 owl-theme">
                                    <div>
                                        <div class="card pb-5"> <img class="card-img link-img rounded"
                                                src="assets/images/carlla-willstons.jpg" alt="" />
                                        </div>
                                        <h3 class="text-center mt-3 mb-0">Carlla Willstons</h3>
                                        <p class="text-center mt-1 third-clr">Reporter</p>
                                    </div>
        
                                    <div>
                                        <div class="card pb-5"> <img class="card-img link-img rounded"
                                                src="assets/images/carlla-willstons.jpg" alt="" />
                                        </div>
                                        <h3 class="text-center mt-3 mb-0">Carlla Willstons</h3>
                                        <p class="text-center mt-1 third-clr">Reporter</p>
                                    </div>
        
                                    <div>
                                        <div class="card pb-5"> <img class="card-img link-img rounded"
                                                src="assets/images/carlla-willstons.jpg" alt="" />
                                        </div>
                                        <h3 class="text-center mt-3 mb-0">Carlla Willstons</h3>
                                        <p class="text-center mt-1 third-clr">Reporter</p>
                                    </div>
        
                                    <div>
                                        <div class="card pb-5"> <img class="card-img link-img rounded"
                                                src="assets/images/carlla-willstons.jpg" alt="" />
                                        </div>
                                        <h3 class="text-center mt-3 mb-0">Carlla Willstons</h3>
                                        <p class="text-center mt-1 third-clr">Reporter</p>
                                    </div>
                                </div>
        
        
                                <div class="owl-carousel bg-gray owl-carousel5 owl-theme my-5 pb-5">
                                    <div>
                                        <div class="card bg-gray">
                                            <h3 class="text-center mt-3 mb-0">Twitter Posts</h3>
                                            <hr class="mx-auto" />
                                            <p class="text-center mt-1">To take a trivial example, which of us ever undertakes
                                                laborious physical exercise, some advantage from it? </p>
                                            <p class="text-center my-1"><span>14 minutes ago</span></p>
                                        </div>
        
                                    </div>
                                    <div>
                                        <div class="card bg-gray">
                                            <h3 class="text-center mt-3 mb-0">Twitter Posts</h3>
                                            <hr class="mx-auto" />
                                            <p class="text-center mt-1">To take a trivial example, which of us ever undertakes
                                                laborious physical exercise, some advantage from it? </p>
                                            <p class="text-center my-1"><span>14 minutes ago</span></p>
                                        </div>
        
                                    </div>
                                    <div>
                                        <div class="card bg-gray">
                                            <h3 class="text-center mt-3 mb-0">Twitter Posts</h3>
                                            <hr class="mx-auto" />
                                            <p class="text-center mt-1">To take a trivial example, which of us ever undertakes
                                                laborious physical exercise, some advantage from it? </p>
                                            <p class="text-center my-1"><span>14 minutes ago</span></p>
                                        </div>
        
                                    </div>
                                    <div>
                                        <div class="card bg-gray">
                                            <h3 class="text-center mt-3 mb-0">Twitter Posts</h3>
                                            <hr class="mx-auto" />
                                            <p class="text-center mt-1">To take a trivial example, which of us ever undertakes
                                                laborious physical exercise, some advantage from it? </p>
                                            <p class="text-center my-1"><span>14 minutes ago</span></p>
                                        </div>
        
                                    </div>
        
        
                                </div>
        
                                <h3 class="text-center">Follow Us</h3>
                                <hr class="mx-auto" />
                                <nav class="nav nav-fill mx-auto mb-5">
                                    <li class="nav-item">
                                        <a class="nav-link" href="https://facebook.com/fh5co" target="_blank"><i
                                                class="fab fa-facebook-f"></i></a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="https://twitter.com/fh5co" target="_blank"><i
                                                class="fab fa-twitter"></i></a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#"><i class="fab fa-instagram"></i></a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#"><i class="fab fa-google-plus-g"></i></a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#"><i class="fas fa-rss"></i></a>
                                    </li>
                                </nav>
        
                                <h3 class="text-center">Instagram</h3>
                                <hr class="mx-auto" />
                                <div class="row insta-links mt-2">
                                    <div class="col-md-4 col-sm-6 col-6">
                                        <div class="card">
                                            <img class="card-img w-100" src="assets/images/insta1.png" alt="" />
                                            <div class="card-img-overlay d-flex justify-content-center align-items-center">
                                                <a href="#"><img src="assets/images/right-icon.png" alt="" /></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4 col-sm-6 col-6">
                                        <div class="card">
                                            <img class="card-img w-100" src="assets/images/insta2.png" alt="" />
                                            <div class="card-img-overlay d-flex justify-content-center align-items-center">
                                                <a href="#"><img src="assets/images/right-icon.png" alt="" /></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4 col-sm-6 col-6">
                                        <div class="card">
                                            <img class="card-img w-100" src="assets/images/insta3.png" alt="" />
                                            <div class="card-img-overlay d-flex justify-content-center align-items-center">
                                                <a href="#"><img src="assets/images/right-icon.png" alt="" /></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4 col-sm-6 col-6">
                                        <div class="card">
                                            <img class="card-img w-100" src="assets/images/insta4.png" alt="" />
                                            <div class="card-img-overlay d-flex justify-content-center align-items-center">
                                                <a href="#"><img src="assets/images/right-icon.png" alt="" /></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4 col-sm-6 col-6">
                                        <div class="card">
                                            <img class="card-img w-100" src="assets/images/insta5.png" alt="" />
                                            <div class="card-img-overlay d-flex justify-content-center align-items-center">
                                                <a href="#"><img src="assets/images/right-icon.png" alt="" /></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4 col-sm-6 col-6">
                                        <div class="card">
                                            <img class="card-img w-100" src="assets/images/insta6.png" alt="" />
                                            <div class="card-img-overlay d-flex justify-content-center align-items-center">
                                                <a href="#"><img src="assets/images/right-icon.png" alt="" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
        
                                <h3 class="text-center mt-5">Trending Posts</h3>
                                <hr class="mx-auto" />
                                <div class="tranding-posts mt-4">
                                    <div class="media my-3">
                                        <div class="d-flex align-items-center justify-content-center"><a href="#"><img
                                                    src="assets/images/t-post1.png" alt="" /></a></div>
                                        <div
                                            class="media-body text-center d-flex align-items-center justify-content-center flex-column px-3">
                                            <a href="#">The latest trends
                                                in Travel</a>
                                            <p class="mt-1">08 Jan 2019</p>
                                        </div>
                                    </div>
                                    <div class="media my-3">
                                        <div class="d-flex align-items-center justify-content-center"><a href="#"><img
                                                    src="assets/images/t-post2.png" alt="" /></a></div>
                                        <div
                                            class="media-body text-center d-flex align-items-center justify-content-center flex-column px-3">
                                            <a href="#">Effective fine art
                                                design</a>
                                            <p class="mt-1">08 Jan 2019</p>
                                        </div>
                                    </div>
                                    <div class="media my-3">
                                        <div class="d-flex align-items-center justify-content-center"><a href="#"><img
                                                    src="assets/images/t-post3.png" alt="" /></a></div>
                                        <div
                                            class="media-body text-center d-flex align-items-center justify-content-center flex-column px-3">
                                            <a href="#">How to design
                                                your first PSD?</a>
                                            <p class="mt-1">08 Jan 2019</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container-fluid jumbotron-fluid stay mt-5 pt-5 pb-5">
        <h2 class="text-center">Stay Updated</h2>
        <p class="text-center mt-2">Sign up for our newsletter to receive the latest news and event postings.</p>
        <div class="input-group mt-4 mx-auto" style="max-width: 640px">
         <input type="email" className="form-control" placeholder="YOUR EMAIL ADDRESS" />
        <div class="">
                <button class="btn btn-success ml-2" type="submit">SIGN UP</button>
            </div>
        </div>
            </div>
        </div>
       
  );
}

export default Article;
