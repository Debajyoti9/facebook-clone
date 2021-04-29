import React from 'react'
import Story from './Story'
import './StoryReel.css'
function StoryReel() {
    return (
        <div className="storyReel">
            <Story 
              image = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRAyJz5vqemgFgHx0NaELGpfyhX-6M2pGfDMg&usqp=CAU"
              profileSrc = 'https://media-exp1.licdn.com/dms/image/C5103AQFLvGtkkLgmwA/profile-displayphoto-shrink_200_200/0?e=1605139200&v=beta&t=KSH56vthfs5XuoiB6r2gXmcBEw2JDgSKNsFq3FIAkyI'
              title = "Debajyoti Shee"
            />
            <Story 
              image = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTpRDJdmWgZGCykLHXuZR-paho310YcOgWyZA&usqp=CAU"
              profileSrc = 'https://pbs.twimg.com/profile_images/3567817990/6a02191f65bfce933fbda20f8dc5ecb8_400x400.jpeg'
              title = "Hasina Parker"
            />
            <Story 
              image = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQC3avqQNTcRMrWDj-DMNiFJL_jtxPTRsvVpA&usqp=CAU"
              profileSrc = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQMNC2AYx1RtY9sutAPTEJ6M0MsIzH9Cdmtew&usqp=CAU'
              title = "Sourav Shee"
            />
            <Story 
              image = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQaBYQcLnpgF9_09-hrtIDFo4HWmSviYytv-w&usqp=CAU"
              profileSrc = 'https://d1kkg0o175tdyf.cloudfront.net/large/s_0f1de9871501-2018-06-07-19-09-57-000913.jpg'
              title = "Ashish Singh"
            />
            <Story 
              image = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQd2LPD0-34nA32BZThOvg8m_UvN8_emwav4g&usqp=CAU"
              profileSrc = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSH6Wawep5UqgDXCItMBtdNSXCMXp1yY4262A&usqp=CAU'
              title = "Ajay Pradhan"
            />
        </div>
    )
}

export default StoryReel
