import { Component } from "react";
import { Link } from "react-router-dom";
import { FaEnvelope, FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { FaInbox } from "react-icons/fa";
import { TbLogout2 } from "react-icons/tb";
import { IoStatsChart } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoMdRefresh } from "react-icons/io";
import { FaCircle } from "react-icons/fa";
import { FaShare } from "react-icons/fa";
import { FaChartSimple, FaTrashCan } from "react-icons/fa6";
import { FaSun } from "react-icons/fa";
import { IoMoon } from "react-icons/io5";
import { FaEnvelopeOpen } from "react-icons/fa6";
import { FaMagnifyingGlass } from "react-icons/fa6";
import "./index.css";

const initialMailsList = [
  {
    mailId: 1,
    fromName: "Mitrajit Chandra",
    fromEmail: "mitrajit2022@gmail.com",
    toEmail: "shaw@getmemeetings.com",
    subject: "Shaw - following up on our meeting last week...",
    body: "How are you Shaw? Thanks for reaching out over our web chat. How can I help you with your project? Please let me know if you need anything else. Regards, Mitrajit Chandra",
    isRead: true,
    statusText: "Interested",
    fromContact: "58377484883",
    fromLinkedIn: "linkedin/MitrajitChandra",
    createdAt:
      new Date().toDateString() + " " + new Date().toLocaleTimeString(),
  },
  {
    mailId: 2,
    fromName: "John Doe",
    fromEmail: "john.doe@example.com",
    toEmail: "jane.doe@example.com",
    subject: "Meeting Request",
    body: "Hi Jane, Could we schedule a meeting for next week to discuss the project updates? Regards, John",
    isRead: false,
    statusText: "Pending",
    fromContact: "1234567890",
    fromLinkedIn: "linkedin/JohnDoe",
    createdAt:
      new Date().toDateString() + " " + new Date().toLocaleTimeString(),
  },
  {
    mailId: 3,
    fromName: "Alice Smith",
    fromEmail: "alice.smith@example.com",
    toEmail: "bob.johnson@example.com",
    subject: "Project Proposal",
    body: "Hello Bob, Attached is the proposal document for the upcoming project. Please review and provide feedback. Best, Alice",
    isRead: true,
    statusText: "Reviewed",
    fromContact: "9876543210",
    fromLinkedIn: "linkedin/AliceSmith",
    createdAt:
      new Date().toDateString() + " " + new Date().toLocaleTimeString(),
  },
  {
    mailId: 4,
    fromName: "Emily Clark",
    fromEmail: "emily.clark@example.com",
    toEmail: "david.lee@example.com",
    subject: "Client Feedback",
    body: "Hi David, The client has shared their feedback on the recent presentation. Please see the attached file. Thanks, Emily",
    isRead: false,
    statusText: "New",
    fromContact: "1122334455",
    fromLinkedIn: "linkedin/EmilyClark",
    createdAt:
      new Date().toDateString() + " " + new Date().toLocaleTimeString(),
  },
  {
    mailId: 5,
    fromName: "Michael Brown",
    fromEmail: "michael.brown@example.com",
    toEmail: "susan.white@example.com",
    subject: "Weekly Report",
    body: "Hi Susan, Here is the weekly report for your review. Let me know if you have any questions. Regards, Michael",
    isRead: true,
    statusText: "Reviewed",
    fromContact: "9988776655",
    fromLinkedIn: "linkedin/MichaelBrown",
    createdAt:
      new Date().toDateString() + " " + new Date().toLocaleTimeString(),
  },
  {
    mailId: 6,
    fromName: "Lisa Green",
    fromEmail: "lisa.green@example.com",
    toEmail: "paul.walker@example.com",
    subject: "Team Meeting Agenda",
    body: "Hello Paul, Please find the agenda for the upcoming team meeting attached. Best, Lisa",
    isRead: false,
    statusText: "Pending",
    fromContact: "5544332211",
    fromLinkedIn: "linkedin/LisaGreen",
    createdAt:
      new Date().toDateString() + " " + new Date().toLocaleTimeString(),
  },
  {
    mailId: 7,
    fromName: "James Anderson",
    fromEmail: "james.anderson@example.com",
    toEmail: "mike.davis@example.com",
    subject: "Follow-up on Budget Proposal",
    body: "Hi Mike, I wanted to follow up on the budget proposal I sent last week. Please let me know if you have any questions. Regards, James",
    isRead: true,
    statusText: "Follow-up",
    fromContact: "6677889900",
    fromLinkedIn: "linkedin/JamesAnderson",
    createdAt:
      new Date().toDateString() + " " + new Date().toLocaleTimeString(),
  },
  {
    mailId: 8,
    fromName: "Nancy Taylor",
    fromEmail: "nancy.taylor@example.com",
    toEmail: "robert.martin@example.com",
    subject: "New Project Kickoff",
    body: "Hi Robert, We are excited to start the new project. Let's plan a kickoff meeting next week. Regards, Nancy",
    isRead: false,
    statusText: "New",
    fromContact: "3344556677",
    fromLinkedIn: "linkedin/NancyTaylor",
    createdAt:
      new Date().toDateString() + " " + new Date().toLocaleTimeString(),
  },
  {
    mailId: 9,
    fromName: "Karen Martinez",
    fromEmail: "karen.martinez@example.com",
    toEmail: "daniel.evans@example.com",
    subject: "Annual Leave Request",
    body: "Dear Daniel, I would like to request annual leave from the 15th to the 20th of this month. Regards, Karen",
    isRead: true,
    statusText: "Approved",
    fromContact: "2233445566",
    fromLinkedIn: "linkedin/KarenMartinez",
    createdAt:
      new Date().toDateString() + " " + new Date().toLocaleTimeString(),
  },
  {
    mailId: 10,
    fromName: "Christopher Wilson",
    fromEmail: "christopher.wilson@example.com",
    toEmail: "sarah.moore@example.com",
    subject: "Feedback on Design Mockups",
    body: "Hi Sarah, The design mockups look great! I have a few suggestions for improvement. Let's discuss them during our meeting. Regards, Chris",
    isRead: false,
    statusText: "Pending",
    fromContact: "9988776655",
    fromLinkedIn: "linkedin/ChristopherWilson",
    createdAt:
      new Date().toDateString() + " " + new Date().toLocaleTimeString(),
  },
];

class Home extends Component {
  state = {
    activeMailObj: initialMailsList[0],
    activeMailId: initialMailsList[0].mailId,
    searchInput: "",
    mailsList: initialMailsList,
  };

  onClickMailTab = (id) => {
    const gotMail = initialMailsList.find((e) => e.mailId === id);
    this.setState({ activeMailObj: gotMail, activeMailId: gotMail.mailId });
  };

  onChangeSearch = (event) => {
    this.setState({ searchInput: event.target.value });
  };

  onClickSearchIcon = () => {
    const { searchInput } = this.state;
    const searchedResults = initialMailsList.filter((e) =>
      e.fromName.toLowerCase().includes(searchInput.toLowerCase())
    );
    this.setState({ mailsList: searchedResults });
  };

  onClickDelete = (id) => {
    const filteredMails = initialMailsList.filter((e) => e.mailId !== id);
    this.setState((prevState) => ({
      mailsList: filteredMails,
      activeMailId: prevState.activeMailId + 1,
    }));
  };

  onClickRefresh = () => {
    this.renderMailsList();
  };

  renderMailsList = () => {
    const { mailsList, activeMailId } = this.state;
    return (
      <>
        <div className="msgsCont">
          <div className="msgsAllCont">
            <div className="allCont">
              <h1 className="allHead">
                All Inbox(s)
                <RiArrowDropDownLine className="allIcon" />
              </h1>
              <p className="allParaCont">
                <span className="allSpan">25/25</span>Inboxes selected
              </p>
            </div>
            <div className="refreshCont">
              <IoMdRefresh className="allIcon" />
            </div>
          </div>
          <div className="searchCont">
            <FaMagnifyingGlass
              onClick={this.onClickSearchIcon}
              className="searchIcon"
            />
            <input
              onChange={this.onChangeSearch}
              className="inputBox"
              type="search"
              placeholder="Search..."
            />
          </div>
          <div className="numNewCont">
            <div className="numCont">
              <p className="numPara">26</p>
              <h1 className="numHead">New Replies</h1>
            </div>
            <h1 className="newHead">
              Newest
              <RiArrowDropDownLine className="searchIcon" />
            </h1>
          </div>
          <ul className="mailsUl">
            {mailsList.map((each) => (
              <li
                key={each.mailId}
                onClick={() => this.onClickMailTab(each.mailId)}
                className={`mailLi ${
                  each.mailId === activeMailId ? "activeMailLi" : ""
                }`}
              >
                <div className="fromDateCont">
                  {each.isRead && <FaCircle className="statusIcon" />}
                  <div className="fromContLi">
                    <h1 className="fromHeadLi">{each.fromEmail}</h1>
                    <p className="fromParaLi">{each.subject}</p>
                  </div>
                  <p className="dateParaLi">{each.createdAt.split(" ")[0]}</p>
                </div>
                <div className="mailStatusContLi">
                  <p className="statusPara">
                    <FaCircle className="statusIcon" />
                    {each.statusText}
                  </p>
                  <p className="campPara">
                    <FaTelegramPlane className="statusIcon" />
                    Campaign Name
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  };

  renderMailBox = () => {
    const { activeMailObj } = this.state;
    const { mailId, fromEmail, fromName, subject, createdAt, toEmail, body } =
      activeMailObj;
    return (
      <>
        <div className="replyCont">
          <div className="replyFromCont">
            <div className="replyTextCont">
              <h1 className="replyHead">{fromName}</h1>
              <p className="replyPara">{fromEmail}</p>
            </div>
            <div className="replyStatusCont">
              <button
                onClick={() => this.onClickDelete(mailId)}
                className="deleteBtn"
              >
                <FaTrashCan className="deleteIcon" />
              </button>
            </div>
          </div>
          <div className="lineCont">
            <hr className="lineHr" />
            <p className="linePara">Today</p>
            <hr className="lineHr" />
          </div>
          <div className="replyBodyCont">
            <div className="bodyHeadCont">
              <h1 className="bodyHead">{subject}</h1>
              <p className="bodyPara"> {createdAt}</p>
            </div>
            <p className="bodyPara">
              from : {fromEmail} : {toEmail}
            </p>
            <p className="bodyPara">to : {toEmail}</p>
            <p className="bodyPara2">
              Hi {fromName},{body}
            </p>
          </div>
          <button className="replyBtn">
            <FaShare className="replyIcon" />
            Reply
          </button>
        </div>
      </>
    );
  };

  renderUserBox = () => {
    const { activeMailObj } = this.state;
    const { fromName, fromEmail, fromContact, fromLinkedIn } = activeMailObj;
    return (
      <>
        <div className="userCont">
          <div className="leadCont">
            <h1 className="leadHead">Lead Details </h1>
            <div className="detailsCont">
              <h1 className="detailsHead">Name</h1>
              <p className="detailsPara">{fromName}</p>
            </div>
            <div className="detailsCont">
              <h1 className="detailsHead">Contact</h1>
              <p className="detailsPara">+54-{fromContact}</p>
            </div>
            <div className="detailsCont">
              <h1 className="detailsHead">Email Id</h1>
              <p className="detailsPara">{fromEmail}</p>
            </div>
            <div className="detailsCont">
              <h1 className="detailsHead">LinkedIn</h1>
              <p className="detailsPara">{fromLinkedIn}</p>
            </div>
            <div className="detailsCont">
              <h1 className="detailsHead">Company Name</h1>
              <p className="detailsPara">Reachinbox</p>
            </div>
          </div>
          <div className="activityCont">
            <h1 className="activityHead">Activities</h1>
            <div className="campCont">
              <h1 className="campHead">Campaign Name</h1>
              <div className="stepsCont">
                <p className="stepsPara">3 Steps</p>
                <p className="stepsPara">|</p>
                <p className="stepsPara">5 Days in sequence</p>
              </div>
              <div className="eachStepCont">
                <div className="eachStep">
                  <FaEnvelope className="stepIcon" />
                  <div className="eachStepText">
                    <h1 className="eachStepHead">Step 1:Email</h1>
                    <p className="eachStepPara">
                      <FaTelegramPlane className="eachStepIcon" />
                      Sent 3rd, Feb
                    </p>
                  </div>
                </div>
                <div className="eachStep">
                  <FaEnvelope className="stepIcon" />
                  <div className="eachStepText">
                    <h1 className="eachStepHead">Step 2:Email</h1>
                    <p className="eachStepPara">
                      <FaEnvelope className="eachStepIcon" />
                      Sent 5rd, Feb
                    </p>
                  </div>
                </div>
                <div className="eachStep">
                  <FaEnvelope className="stepIcon" />
                  <div className="eachStepText">
                    <h1 className="eachStepHead">Step 3: Email</h1>
                    <p className="eachStepPara">
                      <FaEnvelopeOpen className="eachStepIcon" />
                      Sent 7rd, Feb
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  render() {
    const { activeMailObj } = this.state;
    return (
      <>
        <div className="bgOnebox">
          <div className="bgSidebar">
            <button className="sideLogoBtn">
              <img
                className="mIcon"
                src="https://media.licdn.com/dms/image/v2/D560BAQEmo1aZIhVtlQ/company-logo_200_200/company-logo_200_200/0/1700158687336/reachinbox_ai_logo?e=2147483647&v=beta&t=P9A8YrpLwheo1VGFRXN4eb7gF1P0JhgY2wS7dQ_affc"
                alt="mIcon"
              />
            </button>
            <div className="sideMenuCont">
              <button className="sideMenuBtn">
                <FaHome className="sideMenuIcon" />
              </button>
              <button className="sideMenuBtn">
                <FaUser className="sideMenuIcon" />
              </button>
              <button className="sideMenuBtn">
                <FaTelegramPlane className="sideMenuIcon" />
              </button>
              <button className="sideMenuBtn">
                <FaBars className="sideMenuIcon" />
              </button>
              <button className="sideMenuBtn">
                <FaInbox className=" activeSideMenuIcon sideMenuIcon" />
              </button>
              <button className="sideMenuBtn">
                <FaChartSimple className="sideMenuIcon" />
              </button>
              <button className="sideMenuBtn">
                <Link className="linkLogout" to="/">
                  <TbLogout2 className="linkLogout" />
                </Link>
              </button>
            </div>
            <div className="sideProfile">
              <p className="sidePara">
                {activeMailObj.fromName.split(" ")[0][0]}
              </p>
            </div>
          </div>
          <div className="bgMailCont">
            <div className="topCont">
              <h1 className="topHead">Onebox</h1>
              <div className="topTextCont">
                <div className="themeCont">
                  <button className="themeBtn">
                    <IoMoon className="themeIconMoon" />
                  </button>
                  <button className="themeBtn">
                    <FaSun className="themeIconSun" />
                  </button>
                </div>
                <p className="topPara">
                  Tim's Workspace
                  <RiArrowDropDownLine className="themeIconMoon" />
                </p>
              </div>
            </div>
            <div className="msgsReplyUserCont">
              {this.renderMailsList()}
              {this.renderMailBox()}
              {this.renderUserBox()}
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Home;
