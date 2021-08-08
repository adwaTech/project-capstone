import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import './user.css';
import Alert from '@material-ui/lab/Alert';

export default function User() {
    React.useEffect(()=>{
        const target = {
            clicked: 0,
            currentFollowers: 90,
            btn: document.querySelector("a.btn"),
            fw: document.querySelector("span.followers")
          };
          
          const follow = () => {
            target.clicked += 1;
            target.btn.innerHTML = 'Following <i class="fas fa-user-times"></i>';
          
            if (target.clicked % 2 === 0) {
              target.currentFollowers -= 1;
              target.btn.innerHTML = 'Follow <i class="fas fa-user-plus"></i>';
            }
            else {
              target.currentFollowers += 1;
            }
          
            target.fw.textContent = target.currentFollowers;
            target.btn.classList.toggle("following");
          }
    })
    function ul(index) {
        console.log('click!' + index)
        
        var underlines = document.querySelectorAll(".underline");
        if(index==0){
            setComponent("Bid")
        }
        if(index==1){
            setComponent("Auction");
        }
        if(index==2){
            setComponent("Notifications")
        }
        if(index==3){
            setComponent("Win")
        }
        if(index==4){
            setComponent("Lost")
        }
        for (var i = 0; i < underlines.length; i++) {
            underlines[i].style.transform = 'translate3d(' + index * 100 + '%,0,0)';
        }
    }
    const [component,setComponent]=React.useState('Bid');
    function renderComponents(){
        switch(component){
            case "Bid":
                return <BidTable/>
            case "Auction":
                return <AuctionsTable/>
            case "Notifications":
                return <Notification/>
            case "Win":
                return <Win/>;
            case "Lost":
                return <Win/>
        }
    }
    return (
        <div>
            <Header/>
            <div className="profile-page">
                <nav class="full">
                <div class="underline"></div>
                <div class="underline"></div>
                <div class="underline"></div>
                <a onClick={()=>ul(0)}>My Bids</a><a onClick={()=>ul(1)}>My Auctions</a><a onClick={()=>ul(2)}>Notifications</a><a onClick={()=>ul(3)}>Win</a><a onClick={()=>ul(4)}>lost</a>
                </nav>
                <div style={{display:"flex",flexDirection:"row",position:"relative"}}>
                    <div className="user-profile-page">
                    <div class="card">
                        <div class="ds-top"></div>
                        <div class="avatar-holder">
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1820405/profile/profile-512.jpg?1533058950" alt="Albert Einstein"/>
                        </div>
                        <div class="name">
                            <a href="" target="_blank">Meseret Kifle</a>
                            <h6 title="Followers"><i class="fas fa-users"></i> <span class="followers">90</span></h6>
                        </div>
                        <div class="button">
                            <a href="#" class="btn" onmousedown="follow();">Create Auction <i class="fas fa-user-plus"></i></a>
                        </div>
                        <div class="ds-info">
                            <div class="ds pens">
                            <h6 title="Number of pens created by the user">Bids <i class="fas fa-edit"></i></h6>
                            <p>29</p>
                            </div>
                            <div class="ds projects">
                            <h6 title="Number of projects created by the user">Posts <i class="fas fa-project-diagram"></i></h6>
                            <p>12</p>
                            </div>
                            <div class="ds posts">
                            <h6 title="Number of posts">Posts <i class="fas fa-comments"></i></h6>
                            <p>20</p>
                            </div>
                        </div>
                        <div class="ds-skill">
                            <h6>Skill <i class="fa fa-code" aria-hidden="true"></i></h6>
                            <div class="skill html">
                            <h6><i class="fab fa-html5"></i> Total Auction </h6>
                            <div class="bar bar-html">
                                <p>95%</p>
                            </div>
                            </div>
                            <div class="skill css">
                            <h6><i class="fab fa-css3-alt"></i> Total Bid </h6>
                            <div class="bar bar-css">
                                <p>90%</p>
                            </div>
                            </div>
                            <div class="skill javascript">
                            <h6><i class="fab fa-js"></i> Total Win </h6>
                            <div class="bar bar-js">
                                <p>75%</p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    {renderComponents()}
                </div>
            </div>
            <Footer/>
        </div>
    )
}


function BidTable(){
    return(
        <div className="bidTable">
            <div class="table">
                <div class="table-cell"></div>
                <div class="table-cell plattform">
                    <h3>Wins</h3>
                    <a href="" class="btn">Wins</a>
                </div>
                <div class="table-cell enterprise">
                    <h3>Loses</h3>
                    <a href="" class="btn">Loses</a>
                </div>
                <div class="table-cell cell-feature">Land</div>
                <div class="table-cell">
                    <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                    <title>check_blue</title>
                    <path d="M6.116 14.884c.488.488 1.28.488 1.768 0l10-10c.488-.488.488-1.28 0-1.768s-1.28-.488-1.768 0l-9.08 9.15-4.152-4.15c-.488-.488-1.28-.488-1.768 0s-.488 1.28 0 1.768l5 5z" fill="limegreen" fill-rule="evenodd"/>
                    </svg>
                </div>
                <div class="table-cell">
                    <svg class="enterprise-check" width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                    <title>check_blue</title>
                    <path d="M6.116 14.884c.488.488 1.28.488 1.768 0l10-10c.488-.488.488-1.28 0-1.768s-1.28-.488-1.768 0l-9.08 9.15-4.152-4.15c-.488-.488-1.28-.488-1.768 0s-.488 1.28 0 1.768l5 5z" fill="limegreen" fill-rule="evenodd"/>
                    </svg>
                </div>
                <div class="table-cell cell-feature">Car</div>
                <div class="table-cell">
                    <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                    <title>check_blue</title>
                    <path d="M6.116 14.884c.488.488 1.28.488 1.768 0l10-10c.488-.488.488-1.28 0-1.768s-1.28-.488-1.768 0l-9.08 9.15-4.152-4.15c-.488-.488-1.28-.488-1.768 0s-.488 1.28 0 1.768l5 5z" fill="limegreen" fill-rule="evenodd"/>
                    </svg>
                </div>
                <div class="table-cell">
                    <svg class="enterprise-check" width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                    <title>check_blue</title>
                    <path d="M6.116 14.884c.488.488 1.28.488 1.768 0l10-10c.488-.488.488-1.28 0-1.768s-1.28-.488-1.768 0l-9.08 9.15-4.152-4.15c-.488-.488-1.28-.488-1.768 0s-.488 1.28 0 1.768l5 5z" fill="limegreen" fill-rule="evenodd"/>
                    </svg>
                </div>
                <div class="table-cell cell-feature">Land</div>
                <div class="table-cell">
                    <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                    <title>check_blue</title>
                    <path d="M6.116 14.884c.488.488 1.28.488 1.768 0l10-10c.488-.488.488-1.28 0-1.768s-1.28-.488-1.768 0l-9.08 9.15-4.152-4.15c-.488-.488-1.28-.488-1.768 0s-.488 1.28 0 1.768l5 5z" fill="limegreen" fill-rule="evenodd"/>
                    </svg>
                </div>
                <div class="table-cell">
                    <svg class="enterprise-check" width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                    <title>check_blue</title>
                    <path d="M6.116 14.884c.488.488 1.28.488 1.768 0l10-10c.488-.488.488-1.28 0-1.768s-1.28-.488-1.768 0l-9.08 9.15-4.152-4.15c-.488-.488-1.28-.488-1.768 0s-.488 1.28 0 1.768l5 5z" fill="limegreen" fill-rule="evenodd"/>
                    </svg>
                </div>
                <div class="table-cell cell-feature">Road Constraction</div>
                <div class="table-cell">
                    <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                    <title>check_blue</title>
                    <path d="M6.116 14.884c.488.488 1.28.488 1.768 0l10-10c.488-.488.488-1.28 0-1.768s-1.28-.488-1.768 0l-9.08 9.15-4.152-4.15c-.488-.488-1.28-.488-1.768 0s-.488 1.28 0 1.768l5 5z" fill="limegreen" fill-rule="evenodd"/>
                    </svg>
                </div>
                <div class="table-cell">
                    <svg class="enterprise-check" width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                    <title>check_blue</title>
                    <path d="M6.116 14.884c.488.488 1.28.488 1.768 0l10-10c.488-.488.488-1.28 0-1.768s-1.28-.488-1.768 0l-9.08 9.15-4.152-4.15c-.488-.488-1.28-.488-1.768 0s-.488 1.28 0 1.768l5 5z" fill="limegreen" fill-rule="evenodd"/>
                    </svg>
                </div>
                <div class="table-cell cell-feature">Mobile Phone</div>
                <div class="table-cell"></div>
                <div class="table-cell">
                    <svg class="enterprise-check" width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                    <title>check_blue</title>
                    <path d="M6.116 14.884c.488.488 1.28.488 1.768 0l10-10c.488-.488.488-1.28 0-1.768s-1.28-.488-1.768 0l-9.08 9.15-4.152-4.15c-.488-.488-1.28-.488-1.768 0s-.488 1.28 0 1.768l5 5z" fill="limegreen"/>
                    </svg>
                </div>
                <div class="table-cell cell-feature">Farm Land</div>
                <div class="table-cell"></div>
                <div class="table-cell">
                    <svg class="enterprise-check" width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                    <title>check_blue</title>
                    <path d="M6.116 14.884c.488.488 1.28.488 1.768 0l10-10c.488-.488.488-1.28 0-1.768s-1.28-.488-1.768 0l-9.08 9.15-4.152-4.15c-.488-.488-1.28-.488-1.768 0s-.488 1.28 0 1.768l5 5z" fill="limegreen" fill-rule="evenodd"/>
                    </svg>
                </div>
                <div class="table-cell cell-feature">Car</div>
                <div class="table-cell"></div>
                <div class="table-cell">
                    <svg class="enterprise-check" width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                    <title>check_blue</title>
                    <path d="M6.116 14.884c.488.488 1.28.488 1.768 0l10-10c.488-.488.488-1.28 0-1.768s-1.28-.488-1.768 0l-9.08 9.15-4.152-4.15c-.488-.488-1.28-.488-1.768 0s-.488 1.28 0 1.768l5 5z" fill="limegreen" fill-rule="evenodd"/>
                    </svg>
                </div>
                <div class="table-cell cell-feature">House</div>
                <div class="table-cell"></div>
                <div class="table-cell">
                    <svg class="enterprise-check" width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                    <title>check_blue</title>
                    <path d="M6.116 14.884c.488.488 1.28.488 1.768 0l10-10c.488-.488.488-1.28 0-1.768s-1.28-.488-1.768 0l-9.08 9.15-4.152-4.15c-.488-.488-1.28-.488-1.768 0s-.488 1.28 0 1.768l5 5z" fill="limegreen" fill-rule="evenodd"/>
                    </svg>
                </div>
                </div>
        </div>
    );
}

function AuctionsTable(){
    return (
        <div className="auctionTable">
        <section>
            <h1>My Auction</h1>
            <div class="tbl-header">
                <table cellpadding="0" cellspacing="0" border="0">
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Status</th>
                    <th>Date</th>
                    <th>Price</th>
                    </tr>
                </thead>
                </table>
            </div>
            <div class="tbl-content">
                <table cellpadding="0" cellspacing="0" border="0">
                <tbody>
                    <tr>
                    <td>AAC</td>
                    <td>AUSTRALIAN COMPANY </td>
                    <td>$1.38</td>
                    <td>+2.01</td>
                    <td>-0.36%</td>
                    </tr>
                    <tr>
                    <td>AAD</td>
                    <td>AUSENCO</td>
                    <td>$2.38</td>
                    <td>-0.01</td>
                    <td>-1.36%</td>
                    </tr>
                    <tr>
                    <td>AAX</td>
                    <td>ADELAIDE</td>
                    <td>$3.22</td>
                    <td>+0.01</td>
                    <td>+1.36%</td>
                    </tr>
                    <tr>
                    <td>XXD</td>
                    <td>ADITYA BIRLA</td>
                    <td>$1.02</td>
                    <td>-1.01</td>
                    <td>+2.36%</td>
                    </tr>
                    <tr>
                    <td>AAC</td>
                    <td>AUSTRALIAN COMPANY </td>
                    <td>$1.38</td>
                    <td>+2.01</td>
                    <td>-0.36%</td>
                    </tr>
                    <tr>
                    <td>AAD</td>
                    <td>AUSENCO</td>
                    <td>$2.38</td>
                    <td>-0.01</td>
                    <td>-1.36%</td>
                    </tr>
                    <tr>
                    <td>AAX</td>
                    <td>ADELAIDE</td>
                    <td>$3.22</td>
                    <td>+0.01</td>
                    <td>+1.36%</td>
                    </tr>
                    <tr>
                    <td>XXD</td>
                    <td>ADITYA BIRLA</td>
                    <td>$1.02</td>
                    <td>-1.01</td>
                    <td>+2.36%</td>
                    </tr>
                    <tr>
                    <td>AAC</td>
                    <td>AUSTRALIAN COMPANY </td>
                    <td>$1.38</td>
                    <td>+2.01</td>
                    <td>-0.36%</td>
                    </tr>
                    <tr>
                    <td>AAD</td>
                    <td>AUSENCO</td>
                    <td>$2.38</td>
                    <td>-0.01</td>
                    <td>-1.36%</td>
                    </tr>
                    <tr>
                    <td>AAX</td>
                    <td>ADELAIDE</td>
                    <td>$3.22</td>
                    <td>+0.01</td>
                    <td>+1.36%</td>
                    </tr>
                    <tr>
                    <td>XXD</td>
                    <td>ADITYA BIRLA</td>
                    <td>$1.02</td>
                    <td>-1.01</td>
                    <td>+2.36%</td>
                    </tr>
                    <tr>
                    <td>AAC</td>
                    <td>AUSTRALIAN COMPANY </td>
                    <td>$1.38</td>
                    <td>+2.01</td>
                    <td>-0.36%</td>
                    </tr>
                    <tr>
                    <td>AAD</td>
                    <td>AUSENCO</td>
                    <td>$2.38</td>
                    <td>-0.01</td>
                    <td>-1.36%</td>
                    </tr>
                    <tr>
                    <td>AAX</td>
                    <td>ADELAIDE</td>
                    <td>$3.22</td>
                    <td>+0.01</td>
                    <td>+1.36%</td>
                    </tr>
                    <tr>
                    <td>XXD</td>
                    <td>ADITYA BIRLA</td>
                    <td>$1.02</td>
                    <td>-1.01</td>
                    <td>+2.36%</td>
                    </tr>
                    <tr>
                    <td>AAC</td>
                    <td>AUSTRALIAN COMPANY </td>
                    <td>$1.38</td>
                    <td>+2.01</td>
                    <td>-0.36%</td>
                    </tr>
                    <tr>
                    <td>AAD</td>
                    <td>AUSENCO</td>
                    <td>$2.38</td>
                    <td>-0.01</td>
                    <td>-1.36%</td>
                    </tr>
                    <tr>
                    <td>AAX</td>
                    <td>ADELAIDE</td>
                    <td>$3.22</td>
                    <td>+0.01</td>
                    <td>+1.36%</td>
                    </tr>
                    <tr>
                    <td>XXD</td>
                    <td>ADITYA BIRLA</td>
                    <td>$1.02</td>
                    <td>-1.01</td>
                    <td>+2.36%</td>
                    </tr>
                    <tr>
                    <td>AAC</td>
                    <td>AUSTRALIAN COMPANY </td>
                    <td>$1.38</td>
                    <td>+2.01</td>
                    <td>-0.36%</td>
                    </tr>
                    <tr>
                    <td>AAD</td>
                    <td>AUSENCO</td>
                    <td>$2.38</td>
                    <td>-0.01</td>
                    <td>-1.36%</td>
                    </tr>
                    <tr>
                    <td>AAX</td>
                    <td>ADELAIDE</td>
                    <td>$3.22</td>
                    <td>+0.01</td>
                    <td>+1.36%</td>
                    </tr>
                    <tr>
                    <td>XXD</td>
                    <td>ADITYA BIRLA</td>
                    <td>$1.02</td>
                    <td>-1.01</td>
                    <td>+2.36%</td>
                    </tr>
                    <tr>
                    <td>AAC</td>
                    <td>AUSTRALIAN COMPANY </td>
                    <td>$1.38</td>
                    <td>+2.01</td>
                    <td>-0.36%</td>
                    </tr>
                    <tr>
                    <td>AAD</td>
                    <td>AUSENCO</td>
                    <td>$2.38</td>
                    <td>-0.01</td>
                    <td>-1.36%</td>
                    </tr>
                    <tr>
                    <td>AAX</td>
                    <td>ADELAIDE</td>
                    <td>$3.22</td>
                    <td>+0.01</td>
                    <td>+1.36%</td>
                    </tr>
                    <tr>
                    <td>XXD</td>
                    <td>ADITYA BIRLA</td>
                    <td>$1.02</td>
                    <td>-1.01</td>
                    <td>+2.36%</td>
                    </tr>
                    <tr>
                    <td>AAC</td>
                    <td>AUSTRALIAN COMPANY </td>
                    <td>$1.38</td>
                    <td>+2.01</td>
                    <td>-0.36%</td>
                    </tr>
                    <tr>
                    <td>AAD</td>
                    <td>AUSENCO</td>
                    <td>$2.38</td>
                    <td>-0.01</td>
                    <td>-1.36%</td>
                    </tr>
                    <tr>
                    <td>AAX</td>
                    <td>ADELAIDE</td>
                    <td>$3.22</td>
                    <td>+0.01</td>
                    <td>+1.36%</td>
                    </tr>
                    <tr>
                    <td>XXD</td>
                    <td>ADITYA BIRLA</td>
                    <td>$1.02</td>
                    <td>-1.01</td>
                    <td>+2.36%</td>
                    </tr>
                </tbody>
                </table>
            </div>
            </section>
            <div class="made-with-love">
            M3K Auction
            <i>♥</i> 21/12/11
            <a target="" href="3">Thank you</a>
            </div>
    </div>
    );
}


function Notification(){
    return(
        <div>
            <Alert severity="error">This is an error alert — check it out!</Alert>
            <Alert severity="warning">This is a warning alert — check it out!</Alert>
            <Alert severity="info">This is an info alert — check it out!</Alert>
            <Alert severity="success">This is a success alert — check it out!</Alert>
        </div>
    );
}

function Win(){
    return(
        <div className="bidTable">
        <div class="table">
            <div class="table-cell"></div>
            <div class="table-cell plattform">
                <h3>Wins</h3>
                <a href="" class="btn">Wins</a>
            </div>
            <div class="table-cell enterprise">
                <h3>Loses</h3>
                <a href="" class="btn">Loses</a>
            </div>
            <div class="table-cell cell-feature">Land</div>
            <div class="table-cell">
                <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                <title>check_blue</title>
                <path d="M6.116 14.884c.488.488 1.28.488 1.768 0l10-10c.488-.488.488-1.28 0-1.768s-1.28-.488-1.768 0l-9.08 9.15-4.152-4.15c-.488-.488-1.28-.488-1.768 0s-.488 1.28 0 1.768l5 5z" fill="limegreen" fill-rule="evenodd"/>
                </svg>
            </div>
            <div class="table-cell">
                <svg class="enterprise-check" width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                <title>check_blue</title>
                <path d="M6.116 14.884c.488.488 1.28.488 1.768 0l10-10c.488-.488.488-1.28 0-1.768s-1.28-.488-1.768 0l-9.08 9.15-4.152-4.15c-.488-.488-1.28-.488-1.768 0s-.488 1.28 0 1.768l5 5z" fill="limegreen" fill-rule="evenodd"/>
                </svg>
            </div>
            <div class="table-cell cell-feature">Car</div>
            <div class="table-cell">
                <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                <title>check_blue</title>
                <path d="M6.116 14.884c.488.488 1.28.488 1.768 0l10-10c.488-.488.488-1.28 0-1.768s-1.28-.488-1.768 0l-9.08 9.15-4.152-4.15c-.488-.488-1.28-.488-1.768 0s-.488 1.28 0 1.768l5 5z" fill="limegreen" fill-rule="evenodd"/>
                </svg>
            </div>
            <div class="table-cell">
                <svg class="enterprise-check" width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                <title>check_blue</title>
                <path d="M6.116 14.884c.488.488 1.28.488 1.768 0l10-10c.488-.488.488-1.28 0-1.768s-1.28-.488-1.768 0l-9.08 9.15-4.152-4.15c-.488-.488-1.28-.488-1.768 0s-.488 1.28 0 1.768l5 5z" fill="limegreen" fill-rule="evenodd"/>
                </svg>
            </div>
            <div class="table-cell cell-feature">Land</div>
            <div class="table-cell">
                <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                <title>check_blue</title>
                <path d="M6.116 14.884c.488.488 1.28.488 1.768 0l10-10c.488-.488.488-1.28 0-1.768s-1.28-.488-1.768 0l-9.08 9.15-4.152-4.15c-.488-.488-1.28-.488-1.768 0s-.488 1.28 0 1.768l5 5z" fill="limegreen" fill-rule="evenodd"/>
                </svg>
            </div>
            <div class="table-cell">
                <svg class="enterprise-check" width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                <title>check_blue</title>
                <path d="M6.116 14.884c.488.488 1.28.488 1.768 0l10-10c.488-.488.488-1.28 0-1.768s-1.28-.488-1.768 0l-9.08 9.15-4.152-4.15c-.488-.488-1.28-.488-1.768 0s-.488 1.28 0 1.768l5 5z" fill="limegreen" fill-rule="evenodd"/>
                </svg>
            </div>
            <div class="table-cell cell-feature">Road Constraction</div>
            <div class="table-cell">
                <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                <title>check_blue</title>
                <path d="M6.116 14.884c.488.488 1.28.488 1.768 0l10-10c.488-.488.488-1.28 0-1.768s-1.28-.488-1.768 0l-9.08 9.15-4.152-4.15c-.488-.488-1.28-.488-1.768 0s-.488 1.28 0 1.768l5 5z" fill="limegreen" fill-rule="evenodd"/>
                </svg>
            </div>
            <div class="table-cell">
                <svg class="enterprise-check" width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                <title>check_blue</title>
                <path d="M6.116 14.884c.488.488 1.28.488 1.768 0l10-10c.488-.488.488-1.28 0-1.768s-1.28-.488-1.768 0l-9.08 9.15-4.152-4.15c-.488-.488-1.28-.488-1.768 0s-.488 1.28 0 1.768l5 5z" fill="limegreen" fill-rule="evenodd"/>
                </svg>
            </div>
            <div class="table-cell cell-feature">Mobile Phone</div>
            <div class="table-cell"></div>
            <div class="table-cell">
                <svg class="enterprise-check" width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                <title>check_blue</title>
                <path d="M6.116 14.884c.488.488 1.28.488 1.768 0l10-10c.488-.488.488-1.28 0-1.768s-1.28-.488-1.768 0l-9.08 9.15-4.152-4.15c-.488-.488-1.28-.488-1.768 0s-.488 1.28 0 1.768l5 5z" fill="limegreen"/>
                </svg>
            </div>
            <div class="table-cell cell-feature">Farm Land</div>
            <div class="table-cell"></div>
            <div class="table-cell">
                <svg class="enterprise-check" width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                <title>check_blue</title>
                <path d="M6.116 14.884c.488.488 1.28.488 1.768 0l10-10c.488-.488.488-1.28 0-1.768s-1.28-.488-1.768 0l-9.08 9.15-4.152-4.15c-.488-.488-1.28-.488-1.768 0s-.488 1.28 0 1.768l5 5z" fill="limegreen" fill-rule="evenodd"/>
                </svg>
            </div>
            <div class="table-cell cell-feature">Car</div>
            <div class="table-cell"></div>
            <div class="table-cell">
                <svg class="enterprise-check" width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                <title>check_blue</title>
                <path d="M6.116 14.884c.488.488 1.28.488 1.768 0l10-10c.488-.488.488-1.28 0-1.768s-1.28-.488-1.768 0l-9.08 9.15-4.152-4.15c-.488-.488-1.28-.488-1.768 0s-.488 1.28 0 1.768l5 5z" fill="limegreen" fill-rule="evenodd"/>
                </svg>
            </div>
            <div class="table-cell cell-feature">House</div>
            <div class="table-cell"></div>
            <div class="table-cell">
                <svg class="enterprise-check" width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                <title>check_blue</title>
                <path d="M6.116 14.884c.488.488 1.28.488 1.768 0l10-10c.488-.488.488-1.28 0-1.768s-1.28-.488-1.768 0l-9.08 9.15-4.152-4.15c-.488-.488-1.28-.488-1.768 0s-.488 1.28 0 1.768l5 5z" fill="limegreen" fill-rule="evenodd"/>
                </svg>
            </div>
            </div>
    </div>
    )
}