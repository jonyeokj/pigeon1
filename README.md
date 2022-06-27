# Pigeon

Pigeon is a cantral hub for students to manage their tasks while also servign as a platform to encourage students to interact and socialize with their peers, thus improving their quality of life.


## Link to Pigeon
```
some link here
```

## Motivation
Social interactions on campus and university life in general, have been eclipsed by the emergence of the coronavirus outbreak. Consequently, it is increasingly rare and difficult for students to forge meaningful relationships with one another, as the opportunities and chances to make friends are scarce and slim. This circumstance is especially applicable to international students or students who are studying a different course from their friends.

 Being alone in a course can be daunting as they have nobody to turn to clarify lecture content and face difficulty when forming groups for projects. Having a group of like-minded and trustable friends can benefit students greatly in terms of understanding content and catching up on assignments. 

Furthermore, the integration of online learning in the school curriculum opens gateways for improvements in student life and the assimilation of digital and in-person interactions, and our project intends to capitalize on this prospect. The current online platform in LumiNUS is adequate, but not optimal for students in keeping track of their progress. The deadline and submission section of the website is not always updated, and the timetable is not visually friendly.

Therefore, we intend on creating an app that facilitates peer-to-peer interaction, while streamlining the learning and teaching experience of students and teachers. We intend on creating this app with the goal of improving the quality of life of students.


## Features

### CooCoo (chat)
Initially, chats including everybody in the module will be created. This serves as a platform for students to get to know other students in their course and make new friends in order to help them along the way. This chat room is also used 24/7 to discuss all matters regarding lectures, tutorials, and assignments. This allows for stronger students to share their wisdom.

During lectures and tutorials, students will have access to a dedicated chatroom with the professor/teaching assistant. This will be used by the professor or teaching assistant to facilitate classes. This provides a direct pipeline for the teaching staff and students to communicate, allowing students to clarify doubts and pose interesting questions.

Individuals will have the liberty to create groups of their own, and invite their newfound friends to form smaller and more focused study groups.

Optional anonymous function for the chat. This allows students to break out of their comfort zones and ask questions they would normally be too afraid to ask. 

Includes a filter to censor profanities and inappropriate content. Mandatory for any chat platform to promote a safe and supportive environment.

### DashBoard
Display timetable for all lectures, tutorials, recitals, and labs. This provides students with a forecast of upcoming events to help them organise their time and prioritize their tasks

Option to set the current day and next day’s timetable as wallpaper. Many students do this already, this is an improvement to their quality of life.

A dashboard containing a task checklist and announcement section that professors can manually update. 
The checklist sets reminders (similar to Calendar and Reminders apps on IOS) so students know exactly what they have to complete and by when. Tasks can also be toggled completed or not.

The announcements section allows professors to disseminate information to the students.

Detect new tasks uploaded onto LumiNUS, such as quizzes and assignment submissions, and automatically reflect them on the dashboard. Reduces the workload of professors and makes the accuracy of tasks on the dashboard less prone to human error.

Instead of toggling, the app automatically detects when a task has been submitted on LumiNUS and reflects it as completed on the dashboard. Simple quality of life improvement to help students organize their tasks.

### Teaching Tools
Teachers will be allowed to reference these tools in the chat function that students can click on. This encourages students to actively participate in the activities set by the teachers, thus reflecting the progress of their learning.

Tools can be game or forum centric and will draw inspiration from websites and applications such as Kahoot and PollEV. These score-based systems give students a sense of achievement and are proven to be well received by students.

A whiteboard feature for the facilitator to choose who has permission to write on it. Allows for easy visualization of concepts during class.

## Navigation

### Home page
This is the home page and students will be directed to this page upon successfully loggin in or when clicking on the **Pigeon** on the top of the menu bar. On the left is a togglable menu bar for easily navigating to the other pages (Dashboard, CooCoo, Calender, Timetable, Checklist). The home page also displays summarised versions of the Dashboard and CooCoo sections to give students a quick overview of their important tasks, announcements and chats at a glance wihtout going into the specific pages.

### Dashboard
This is the Dashboard page and students will be directed to this page upon clicking on the Dashboard button in the side menu. The Dahsboard displays important announcements sent by professors, the upcoming submissions and tasks, and a customizable 'Important' section which will be displayed in the summarized version of the Dashboard on the Home page. Students can choose what tasks/announcements to add to this 'Important' section.

### Calender
This is the calender page and students will be directed to this page upon clicking on the Calender button in the side menu bar. This displays the calender adn studetns are able to quickly determine how far away deadlines are. Students are also able to add their own events to the Calender,

### Timetable
This is the timetable page and students will be directed to this page upon clicking on the Timetable button in the sdie menu bar. Students will submit a link to their NusMods timetable which will be imported here and displayed. (Currently unavailable).

### Checklist
This is the Checklist page and students will be directed to this page upon clicking on the Checklist button in the side menu bar. This is a dynamic checklist and students are able to add tasks to this checklsit. Once completed they will be able to cancel out the task for a sense of achievement or remove it from the list to avoid clutter.


## Roadblocks
Some features such as automatically detecting new tasks on LumiNUS and adding to dashboard are currently unavailable as we are in the process of linking up to NUS API. Timetable features are also not real time as we are linking up to the NusMods API. In the meantime, we are using dummy data found in ../src/data/dummy.jsx to showcase the potential of our features.



