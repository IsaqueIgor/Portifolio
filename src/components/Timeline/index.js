import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { Home, School } from 'styled-icons/boxicons-solid';

const MyTimeline = () => {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className='vertical-timeline-element--work'
        contentStyle={{
          background: 'var(--secundary)',
          color: '#fff',
          borderRadius: 12,
        }}
        contentArrowStyle={{ borderRight: '17px solid  var(--secundary)' }}
        date='2018'
        iconStyle={{ background: 'var(--secundary)', color: '#fff' }}
        icon={<Home />}
      >
        <h3 className='vertical-timeline-element-title'>
          Head of Customer Success | Full Stack Developer
        </h3>
        <h4 className='vertical-timeline-element-subtitle'>
          Vitoria-ES, Brazil
        </h4>
        <p>
          Manage a team of 2 Software developers. <br /> Manage Enterprise
          Accounts across all stages from implementation through expansion and
          retention.
          <br /> Manage multiple cross-product opportunities and projects.
          <br />I Helped the company migrate our system to a new version made in
          ASP.NET Core 3 and React
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className='vertical-timeline-element--work'
        contentStyle={{ borderRadius: 12 }}
        date='2018 - 2020'
        iconStyle={{ background: 'var(--primary)', color: 'var(--gray)' }}
        icon={<Home />}
      >
        <h3 className='vertical-timeline-element-title'>
          Full Stack Developer
        </h3>
        <h4 className='vertical-timeline-element-subtitle'>
          Vitoria-ES, Brazil
        </h4>
        <p>
          - Website and software application designing, building, or
          maintaining. <br />- Consulting with departments or customers on
          project status and proposals.
          <br /> - Conduct Stakeholder meeting.
          <br /> - Conferring with teams to resolve conflicts, prioritize needs,
          develop content criteria, or choose solutions. <br />
          Technologies used: C#, ASP NET Core, CSS, HTML, JavaScript, SQL,
          Entity framework, Scrum
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className='vertical-timeline-element--work'
        contentStyle={{ borderRadius: 12 }}
        date='2018'
        iconStyle={{ background: 'var(--primary)', color: 'var(--gray)' }}
        icon={<Home />}
      >
        <h3 className='vertical-timeline-element-title'>
          International Volunteer- AIESEC
        </h3>
        <h4 className='vertical-timeline-element-subtitle'>Bratislava, SK</h4>
        <p>
          I worked in the Project Educate Slovakia (Bratislava, Slovakia), which
          is an educational and multicultural project aimed at improving
          intercutural understanding and English speaking skills among students,
          by providing them the opportunity to experience interactive lessons
          delivered by me.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className='vertical-timeline-element--work'
        contentStyle={{ borderRadius: 12 }}
        date='2017'
        iconStyle={{ background: 'var(--primary)', color: '#fff' }}
        icon={<Home />}
      >
        <h3 className='vertical-timeline-element-title'>
          My First Mobile Application
        </h3>
        <h4 className='vertical-timeline-element-subtitle'>
          {' '}
          UCL, Vitoria-Brazil
        </h4>
        <p>
          Development of an Electronic Lock controlled by Smartphone (Android).
          Where was made a Native application in Android Studio using Java to
          send the lock password via Bluetooth, and the scheme was all developed
          in Arduino.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className='vertical-timeline-element--work'
        contentStyle={{ borderRadius: 12 }}
        date='2016 - Present'
        iconStyle={{ background: 'var(--primary)', color: 'var(--gray)' }}
        icon={<School />}
      >
        <h3 className='vertical-timeline-element-title'>
          Computer Engineer Student
        </h3>
        <h4 className='vertical-timeline-element-subtitle'>
          UCL, Vitoria-Brazil
        </h4>
        <p>
          {' '}
          - Designs, Develops and Maintains Software Systems for commercial,
          Engineering and related applications
        </p>
        <p>- Coordinates computer system projects</p>
        <p>
          - Define and Implement computer Architectures, Computer networks and
          industrial automation processes
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
        icon={<Home />}
      />
    </VerticalTimeline>
  );
};

export default MyTimeline;
