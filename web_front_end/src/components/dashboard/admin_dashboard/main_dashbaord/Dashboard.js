import React from "react";
import ChartistGraph from "react-chartist";
import {
  Feedback,
  ArrowUpward,
  AccessTime,
  BugReport,
  Code,
  Cloud,
  People,
  Gavel

} from '@material-ui/icons';
import {
  Card,
  CardIcon,
  CardBody,
  CardFooter,
  CardHeader,
} from '../Cards';
import { makeStyles } from "@material-ui/core/styles";

import GridItem from "./Grid/GridItem";
import GridContainer from "./Grid/GridContainer";
import Table from "./Table/Table";
import Tasks from "./Tasks/Tasks";
import CustomTabs from "./CustomTabs/CustomTabs";
import Info from "../components/Typography/Info";
import { Doughnut, Bar, Line } from 'react-chartjs-2';



import { bugs, website, server } from "./general.js";


import {
  GetAllAuctionAction,
  GetuserAction,
  GetFeedbackAction
} from '../../../../redux-state-managment/Actions';
import { useSelector, useDispatch } from 'react-redux';

import styles from "./dashboardStyle.js";
import moment from "moment";


const useStyles = makeStyles(styles);


export default function Dashboard() {
  const dispatch = useDispatch();
  const allauction = useSelector(state => state.AuctionsReducer.overallauction);
  const customers = useSelector((state) => state.getUsersReducer.admin_users);
  const feedbacks = useSelector((state) => state.SendFeedBackReducer.feedbacks);
  const token = useSelector(state => state.AccountReducer.token)
  React.useEffect(async () => {
    await dispatch(GetAllAuctionAction());
    await dispatch(GetuserAction(token));
    await dispatch(GetFeedbackAction(token));

  }, [])
  const classes = useStyles();
  const [state, setState] = React.useState({
    labels: ['open', 'ended', 'archieved'],
    datasets: [
      {
        label: 'Rainfall',
        backgroundColor: [
          '#B21F00',
          '#C9DE00',
          '#2FDE00',
          '#00A6B4',
          '#6800B4'
        ],
        hoverBackgroundColor: [
          '#501800',
          '#4B5000',
          '#175000',
          '#003350',
          '#35014F'
        ],
        data: [0, 0, 0]
      }
    ]
  });
  const [state1, setState1] = React.useState({
    labels: ['land', 'house', 'vehicle', 'electronics', 'service', 'rare', 'oldies'],
    datasets: [
      {
        label: 'Auction With Catagory',
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: [65, 59, 80, 81, 56]
      }
    ]
  });
  const [state2, setState2] = React.useState({
    labels: ['random user', 'registered user'],
      datasets: [
        {
          label: 'Feedback',
          fill: false,
          lineTension: 0.5,
          backgroundColor: 'rgba(75,192,192,1)',
          borderColor: 'rgba(0,0,0,1)',
          borderWidth: 2,
        data: [0, 0]
      }
    ]
  });
  React.useEffect(() => {
    setState({
      labels: ['open', 'ended', 'archieved'],
      datasets: [
        {
          label: 'Rainfall',
          backgroundColor: [
            '#B21F00',
            '#C9DE00',
            '#2FDE00',
            '#00A6B4',
            '#6800B4'
          ],
          hoverBackgroundColor: [
            '#501800',
            '#4B5000',
            '#175000',
            '#003350',
            '#35014F'
          ],
          data: [allauction.filter(a => a.status === "open").length, allauction.filter(a => a.status === "ended").length, allauction.filter(a => a.status === "archieved").length]
        }
      ]
    });
    setState1({
      labels: ['land', 'house', 'vehicle', 'electronics', 'service', 'rare', 'oldies'],
      datasets: [
        {
          label: 'AC',
          backgroundColor: 'rgba(75,192,192,1)',
          borderColor: 'rgba(0,0,0,1)',
          borderWidth: 2,
          data: [
            allauction.filter(a => a.auctionCategory === "land").length,
            allauction.filter(a => a.auctionCategory === "house").length,
            allauction.filter(a => a.auctionCategory === "vehicle").length,
            allauction.filter(a => a.auctionCategory === "electronics").length,
            allauction.filter(a => a.auctionCategory === "service").length,
            allauction.filter(a => a.auctionCategory === "rare").length,
            allauction.filter(a => a.auctionCategory === "oldies").length
          ]
        }
      ]
    })
    setState2({
      labels: ['random user', 'registered user'],
      datasets: [
        {
          label: 'Feedback',
          fill: false,
          lineTension: 0.5,
          backgroundColor: 'rgba(75,192,192,1)',
          borderColor: 'rgba(0,0,0,1)',
          borderWidth: 2,
          data: [feedbacks?feedbacks.filter(a=>a.userId===null).length:0, feedbacks?feedbacks.filter(a=>a.userId).length:0]
        }
      ]
    })
  }, [allauction,feedbacks])
  
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <People />
              </CardIcon>
              <p className={classes.cardCategory}>Number of Users</p>
              <h3 className={classes.cardTitle}>
                {customers.length} <small></small>
              </h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Info>
                  <People />
                </Info>
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  Number of user
                </a>
              </div>
            </CardFooter>
          </Card>

        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <Gavel />
              </CardIcon>
              <p className={classes.cardCategory}>Total Auction</p>
              <h3 className={classes.cardTitle}>{allauction.length}</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Info>
                  <Gavel />
                </Info>
                Total Auction
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <Feedback />
              </CardIcon>
              <p className={classes.cardCategory}>Feedback</p>
              <h3 className={classes.cardTitle}>{feedbacks.length}</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Info>
                  <Feedback />
                </Info>
                Total Feed back from customer
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <Gavel />
              </CardIcon>
              <p className={classes.cardCategory}>Approved Auctions</p>
              <h3 className={classes.cardTitle}>{allauction.filter(a => a.approval).length}</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Info>
                  <Gavel />
                </Info>
                Total Approved Auction
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="">
              <Doughnut
                data={state}
                options={{
                  title: {
                    display: true,
                    text: 'Total Auction Status',
                    fontSize: 20
                  },
                  legend: {
                    display: true,
                    position: 'right'
                  }
                }}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Total Auction Status</h4>
              <p className={classes.cardCategory}>
                <span className={classes.successText}>
                  <ArrowUpward className={classes.upArrowCardCategory} /> {allauction.length}
                </span>{" "}
                Status of Auctions
              </p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> {moment(Date.now()).format()}
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="">
              <Bar
                data={state1}
                options={{
                  title: {
                    display: true,
                    text: 'Auction With Catagories',
                    fontSize: 20
                  },
                  legend: {
                    display: true,
                    position: 'right'
                  }
                }}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Catagories of Auction</h4>
              <p className={classes.cardCategory}>out of {allauction.length} </p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> {moment(Date.now()).format()}
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="">
              <Line
                data={state2}
                options={{
                  title: {
                    display: true,
                    text: 'Feedback',
                    fontSize: 20
                  },
                  legend: {
                    display: true,
                    position: 'right'
                  }
                }}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Feedback</h4>
              <p className={classes.cardCategory}>out of {customers.length}</p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> {moment(Date.now()).format()}
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      
      </GridContainer>
      {/* <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
          <CustomTabs
            title="Tasks:"
            headerColor="info"
            tabs={[
              {
                tabName: "Feed backs",
                tabIcon: BugReport,
                tabContent: (
                  <Tasks
                    checkedIndexes={[0, 3]}
                    tasksIndexes={[0, 1, 2, 3]}
                    tasks={bugs}
                  />
                ),
              },
              {
                tabName: "Questions",
                tabIcon: Code,
                tabContent: (
                  <Tasks
                    checkedIndexes={[0]}
                    tasksIndexes={[0, 1]}
                    tasks={website}
                  />
                ),
              },
              {
                tabName: "notifications",
                tabIcon: Cloud,
                tabContent: (
                  <Tasks
                    checkedIndexes={[1]}
                    tasksIndexes={[0, 1, 2]}
                    tasks={server}
                  />
                ),
              },
            ]}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader color="info">
              <h4 className={classes.cardTitleWhite}>New Bids</h4>
              <p className={classes.cardCategoryWhite}>
                Todays Bid Info
              </p>
            </CardHeader>
            <CardBody>
              <Table
                tableHeaderColor="info"
                tableHead={["ID", "Type", "Min Bid", "Date"]}
                tableData={[
                  ["1", "Open", "$36,738", "1/1/1"],
                  ["2", "Close", "$23,789", "1/1/1"],
                  ["3", "Open", "$56,142", "1/1/1"],
                  ["4", "Close", "$38,735", "1/1/1"],
                ]}
              />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
     */}
    </div>
  );
}
