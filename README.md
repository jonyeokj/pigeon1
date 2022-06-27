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

### DashBoard
Learning Dashboard provides students with important information at a glance. It also allows students to easily access the other features (CooCoo, Teaching, Announcements, Timetable and Checklist).

Dashboard will be displayed upon successfully logging in or when clicking on the home page icon at the top of the side menu bar.

Dashboard will contain a summarized window to show the important information for each of the features. This allows students to see the important information at a glance and allows them to easily navigate to each of the individual features.

### CooCoo (chat)
Coocoo will be split according to the modules the student is taking. As we have received some feedback regarding our native chat from the peer evaluation, we have decided to improve the implementation. For each module there will be a link to the Telegram group created by the professor. 

In the summarized window in the Dashboard, CooCoo will show the pinned messages of the Telegram group for the current lesson.

As Telegram is a stable and widely established platform already in use by the majority of students and faculty members, we have decided to make use of the familiar platform Telegram to implement our chat function. This avoids the fuss for students to navigate a new UI.


### Teaching Tools
Teaching Tools will be split according to the modules the student is taking. As we have received some feedback regarding our teaching tools from the peer evaluation, we have decided to improve the implementation. For each module there will be a link to the teaching tools created by the professor such as Kahoot rooms. 

In the summarized window in the Dashboard, Teaching Tools will show the links (if any) to the teaching tools being used by the current lecturer.

As there are already many teaching tools in place such as Kahoot and PollEV and many professors have already been accustomed to using them for their classes, we have decided to preserve these tools and instead provide links for students to easily access these tools during class time.


## Navigation

### Home page
This is the home page and students will be directed to this page upon successfully loggin in or when clicking on the **Pigeon** on the top of the menu bar. On the left is a togglable menu bar for easily navigating to the other pages (Dashboard, CooCoo, Calender, Timetable, Checklist). The home page also displays summarised versions of the Dashboard and CooCoo sections to give students a quick overview of their important tasks, announcements and chats at a glance wihtout going into the specific pages.

### Dashboard
This is the Dashboard page and students will be directed to this page upon clicking on the Dashboard button in the side menu. The Dahsboard displays important announcements sent by professors, the upcoming submissions and tasks, and a customizable 'Important' section which will be displayed in the summarized version of the Dashboard on the Home page. Students can choose what tasks/announcements to add to this 'Important' section.

### Timetable
This is the timetable page and students will be directed to this page upon clicking on the Timetable button in the sdie menu bar. Students will submit a link to their NusMods timetable which will be imported here and displayed. (Currently unavailable).

### Checklist
This is the Checklist page and students will be directed to this page upon clicking on the Checklist button in the side menu bar. This is a dynamic checklist and students are able to add tasks to this checklsit. Once completed they will be able to cancel out the task for a sense of achievement or remove it from the list to avoid clutter.


## Roadblocks
Some features such as automatically detecting new tasks on LumiNUS and adding to dashboard are currently unavailable as we are in the process of linking up to NUS API. Timetable features are also not real time as we are linking up to the NusMods API. In the meantime, we are using dummy data found in ../src/data/dummy.jsx to showcase the potential of our features.



