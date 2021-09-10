import React from "react";
import ChartistGraph from "react-chartist";
import {
  LocalOffer,
  Feedback,
  ArrowUpward,
  AccessTime,
  Accessibility,
  BugReport,
  Code,
  Update,
  Cloud,
  Money,
  Today,
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


import { bugs, website, server } from "./general.js";

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart,
} from "./charts.js";
import {
  GetAllAuctionAction,
  GetuserAction,
  GetFeedbackAction
} from '../../../../redux-state-managment/Actions';
import {useSelector,useDispatch} from 'react-redux';

import styles from "./dashboardStyle.js";


const useStyles = makeStyles(styles);

export default function Dashboard() {
  const dispatch=useDispatch();
  const allauction=useSelector(state=> state.AuctionsReducer.overallauction);
  const customers = useSelector((state) => state.getUsersReducer.admin_users);
  const feedbacks = useSelector((state) => state.SendFeedBackReducer.feedbacks);
  const token= useSelector(state=>state.AccountReducer.token)
  React.useEffect(async ()=>{
    await dispatch(GetAllAuctionAction());
    dispatch(GetuserAction(token));
    dispatch(GetFeedbackAction(token));
  },[])
  const classes = useStyles();
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <People/>
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
                <Feedback/>
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
              <h3 className={classes.cardTitle}>{allauction.filter(a=>a.approval).length}</h3>
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
            <CardHeader color="info">
              <ChartistGraph
              
                className="ct-chart"
                data={allauction}
                type="Line"
                options={dailySalesChart.options}
                listener={dailySalesChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>auction</h4>
              <p className={classes.cardCategory}>
                <span className={classes.successText}>
                  <ArrowUpward className={classes.upArrowCardCategory} /> 55%
                </span>{" "}
                increase in this year Auction.
              </p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> updated 4 minutes ago    
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="info">
              <ChartistGraph
                className="ct-chart"
                data={emailsSubscriptionChart.data}
                type="Bar"
                options={emailsSubscriptionChart.options}
                responsiveOptions={emailsSubscriptionChart.responsiveOptions}
                listener={emailsSubscriptionChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Email Subscriptions</h4>
              <p className={classes.cardCategory}>Last Campaign Performance</p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> campaign sent 2 days ago
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="info">
              <ChartistGraph
                className="ct-chart"
                data={completedTasksChart.data}
                type="Line"
                options={completedTasksChart.options}
                listener={completedTasksChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Completed Tasks</h4>
              <p className={classes.cardCategory}>Last Campaign Performance</p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> campaign sent 2 days ago
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
      <GridContainer>
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
    </div>
  );
}
