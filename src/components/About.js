import UserCardClass from "./UserCardClass.js"

const About = () => {
    return (
        <div id="about">
            <h1>Hello there&#128516;✨</h1>
            <p>This is a food delivery web-app created while learning React.js 🚀</p>
            <p>By</p>

            <UserCardClass name="Bhavesh Vishwakarma" location="Mulund, Mumbai"contact="bhaveshruv@gmail.com"/>
        </div>   
    )
}

export default About;