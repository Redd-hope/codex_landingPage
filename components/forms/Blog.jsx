"use client"
import React, { useState } from 'react';
import './initiative-box.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
// import Image from 'next/image';


const Blog = () => {
    const blog_data = [
        {
            id: 1,
            title: 'Love the animals: God has given them the rudiments of thought and joy untroubled.',
            content: " After conducting our first drive in the month of May, we headed enthusiastically towards our second drive on June 28 . First of all, we identified the areas with maximum population of stray dogs and cats in the GTB Nagar region.In the hot and humid weather of Delhi, we set up 8 water bowls in different areas to provide clean drinking water for animals. We also supplied them with 4 liters of milk, chapatis, and dog food to meet their nutritional needs. Our efforts included engaging with the local community, promoting animal welfare and rights. The residents greatly supported our work and embraced our guidelines on proper animal care. Overall, the endeavor concluded successfully, achieving our mission to a great extent.As we strolled along the streets of GTB Nagar, we received heartfelt appreciation from the locals for our compassion towards animals in the scorching heat. They also shared valuable suggestions on strategic placements of water and food bowls to reach and help as many dogs as possible. Their encouragement motivated us to work even harder for the welfare of animals. With this being our second drive, the volunteers were much more optimistic and actively participated, bringing chapatis and beautifully designed posters to raise awareness among people. Above all, the strong team spirit and collective effort to make a positive change in humanity filled each of us with a great sense of positivity.",
            imageSrc: "https://github.com/whatsUpWeHere/prayanFoundationwebsiteImages/blob/main/124.jpg?raw=true",
        },

        {
            id: 2,
            title: "A woman's strength lies not only in her ability to endure, but in her determination to thrive and inspire",
            content: "On 8th June, we held a remarkable event at Sheroes Hangout Café, managed by Acid Attack Survivors near Noida Stadium, Sector 21A. During the drive, we recorded a podcast with these brave individuals, where they shared their stories and challenges. Our team explored the café and offered valuable feedback. The participation of members from other units made it an inspiring and uplifting experience for all, and the response received was overwhelmingly positive.On 30th June, at Satyawati College, we organized another enlightening event.Through a social experiment, we assessed college students' awareness of women's safety and the challenges they face.Interacting with them, we asked questions to gauge their understanding of women empowerment and encouraged them to actively promote women's safety. It proved to be an incredible and interactive experience for us.According to students' feedback, there is a pressing need to increase awareness about women empowerment. They emphasized the prevalence of women being exploited in offices, workplaces, and homes, and stressed the importance of reducing such incidents and treating women equally to men. Students also highlighted the significance of family support for women to confidently address exploitation and voice their concerns. They urged against the misuse of women's rights.Overall, the drive provided valuable insights into college students' awareness regarding women empowerment.",
            imageSrc: "https://github.com/whatsUpWeHere/prayanFoundationwebsiteImages/blob/main/blog-2.jpg?raw=true",
        },

        {
            id: 3,
            title: 'Embracing Elders: Spreading Smiles, Sharing Stories',
            content: "Drive in the month of May At Rojavanam Old Age Home, Saket, we shared moments of joy with the elderly through dance and music performances by our unit members.Engaging games like 'guess the movie' were played, and the seniors thoroughly enjoyed it, evident from their reactions and smiles.We also offered thoughtful gifts of bananas, buttermilk, and biscuits, which brought happiness to the residents.Drive in the month of JuneWe organized a donation drive at Human Peace Foundation, Nirman Vihar, providing essential items like biscuits, hand towels, and sandos to support the well- being of the residents.The smiles on their faces while receiving the gifts were priceless!Through these drives, Sampriyata continues to spread happiness and care among the elderly, fostering a sense of togetherness and love in every interaction.In summary, the outcomes of Sampriyata's endeavors have been incredibly fulfilling. The elderly residents conveyed their happiness and appreciation for the companionship and enjoyable activities we provided. Their enthusiastic feedback and longing for our return stand as a testament to the meaningful bonds we have built. Their joy fuels our motivation, and we eagerly anticipate future visits, persistently spreading happiness and making a positive impact in their lives.",
            imageSrc: "https://github.com/whatsUpWeHere/prayanFoundationwebsiteImages/blob/main/blog-3.jpg?raw=true",
        },

        {
            id: 4,
            title: "A child's mind is not a container to be filled but rather a fire to be kindled through right education & knowledge",
            content: "During the month of May, we organized three drives on the 7th, 14th, and 21st at a park near Malkaganj, our designated target location.These drives took place regularly every weekend, allowing us to engage with our students and provide them with sincere and dedicated teaching.To ensure effective teaching for everyone, we divided the students into batches based on their classes and assigned 2-3 volunteers to teach each group.In these drives, we emphasized the development of oral communication skills through speaking sessions, fun activities, games, and interactive sessions.We warmly welcomed new children to join us alongside our regular students, fostering a sense of inclusivity and belonging.Moreover, we took the initiative to interact with the parents of the children, encouraging them to actively support their child's education. We assured them of our commitment to the initiative, which garnered positive responses from both parents and children. As a result, the parents trust our program and regularly send their children to participate in every drive.During the month of June, we conducted drives on the 4th, 11th, and 18th at the same location mentioned earlier.In each drive, we focused on upgrading and monitoring our students' progress by assessing their work and providing revision sessions to improve their retention capabilities. Additionally, we introduced new concepts in their respective subjects and conducted quizzes to encourage interaction among the students and with us",
            imageSrc: "https://github.com/whatsUpWeHere/prayanFoundationwebsiteImages/blob/main/blog-4.jpg?raw=true",
        },

        {
            id: 5,
            title: "Empowering Young Minds: Initiative Sukriti Equips Children to Embrace Life's Challenges",
            content: "The activities were conducted at two schools, Balvantray Mehta Vidya Bhawan in Greater Kailash 3, and Guru Nanak Garib Niwaj Education Society in Greater Kailash 2. The response from the students was overwhelmingly positive.The younger students, full of excitement, eagerly completed the forms with a curious nature that led them to ask numerous questions.They listened attentively to the workshop members' responses and even initiated conversations, sharing their favorite things and displaying a keen interest in learning about others' preferences.Their enthusiasm was evident as they expressed their eagerness for the workshop members to visit again in the future.On the other hand, the senior students showed a certain level of shyness and hesitation when it came to asking questions.Nevertheless, they still filled out the forms with enthusiasm, and after completing them, they engaged in lively discussions with their friends, showing their excitement and enthusiasm for the workshop.Following that, the unit conducted a micro workshop at Kalka Public School, Alaknanda, one of the esteemed school chains in Delhi.During the workshop, a volunteer delivered a presentation on art, with a specific focus on charcoal art painting.The children were truly inspired as the volunteer shared his own art pieces, leaving them amazed and captivated.The students engaged in hushed conversations with their peers, clearly impacted by the presentation.",
            imageSrc: "https://github.com/whatsUpWeHere/prayanFoundationwebsiteImages/blob/main/blog-5.jpg?raw=true",
        },

        {
            id: 6,
            title: 'Breaking the cycle of poverty starts with equipping individuals with the knowledge and skills to make sound financial decisions',
            content: "Our visits and motives On 1st June, our objective was to facilitate the collection of documents from migrant workers for Aadhar Card registration.Throughout the drive, we diligently recorded essential information such as age, date of birth, residence, and phone numbers to support the application process.Additionally, we took the opportunity to engage with the workers on a personal level, aiming to understand the challenges they faced in obtaining their Identification Cards.On 20th June, our primary focus was to efficiently complete the Aadhar Card application process for our target location.To ensure smooth proceedings, we organized the students into smaller groups, dedicated to assisting each worker individually.This approach allowed us to provide clarity on the required procedures and the kind of information they would be asked for during the application.Ultimately, our aim was to ensure that every worker received a Unique Identification number, enabling them to feel as much a part of our nation's citizenry as anyone else.Throughout our drives, we deeply connected with hardworking laborers, understanding their struggles without proper ID Proof.Empowered, our mission was clear: guide them in obtaining essential identification documents.Their remarkable cooperation and unwavering trust motivated our best efforts.Engaging with them, we witnessed their determination to overcome obstacles, grateful to contribute to their growth.",
            imageSrc: "https://github.com/whatsUpWeHere/prayanFoundationwebsiteImages/blob/main/blog-6.jpg?raw=true",
        },

        {
            id: 7,
            title: 'Where Dreams Find Wings, Aroma of Possibilities Prevails.',
            content:  "First drive on 5th MayDuring this captivating drive, we actively engaged with the local community, taking the initiative to comprehend their aspirations and requirements.Through a detailed demonstration, we showcased the step- by - step process of creating incense sticks from discarded flowers, coupled with valuable advice on managing a small - scale business.The response from the community surpassed our expectations, with overwhelming positivity.They not only admired our innovative idea but also displayed a strong interest in witnessing a practical demonstration, which we promptly arranged for subsequent drives.Witnessing people of all age groups enthusiastically eager to learn and seek further guidance was truly heartening.Second Drive in June During our recent drive, we presented a detailed demonstration of the entire process involved in making incense sticks and provided a comprehensive guide on running a small - scale business.We are thrilled to announce that the brand has been officially named 'Sugandhim,' a name suggested by members of the Prayan Foundation.The mission under the brand 'Sugandhim' is to create top - quality incense sticks and blocks crafted with care and skill.The production work primarily involves a collaborative effort with the slum residents, while the dedicated members of the Prayan central team actively manage the brand to ensure its success.",
            imageSrc: "https://github.com/whatsUpWeHere/prayanFoundationwebsiteImages/blob/main/blog-7.jpg?raw=true",
        },

    ]
    const [isHovered, setIsHovered] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        setIsClicked(false);
    };

    const [expandedStates, setExpandedStates] = useState(
        blog_data.map(() => false) // Initialize all cards as not expanded
    );
    const handleClick = () => {
        setIsClicked(true);

    };
    const handleButtonClick = (index) => {
        const updatedExpandedStates = [...expandedStates];
        updatedExpandedStates[index] = !updatedExpandedStates[index];
        setExpandedStates(updatedExpandedStates);
        handleClick();
    };

    return (
        <Container>
            <div className=" flex items-center justify-center flex-col mx-auto pt-13">
                <h3 className="font-bold text-2xl text-[#fdbe33]">  Our Blog</h3>
                <p className="text-[#4A4C70] text-4xl text-center letter-wider font-semibold px-13 py-7 border border-red-500">
                    Have a look on our Blogs
                </p>
            </div>
            <Row>
                {blog_data.map((card, index) => (
                    <Col lg={3} md={4} sm={6} xs={12} className="p-2" key={index}>
                        <div className="causes-item bg-white border  rounded-lg shadow-lg p-6">
                            <div className="causes-img" id="initiative-img">
                                <img src={card.imageSrc} alt="Image" className="w-full h-15" id="image-hai-yeh" />
                            </div>
                            <div
                                className={`causes-text mt-4 ${expandedStates[index] ? 'expanded' : ''
                                    }`}
                                id="initiative-content"
                            >
                                <h3 className="text-lg font-semibold">{card.title}</h3>
                                <p
                                    className={`mt-2 text-gray-600 ${expandedStates[index] ? 'expanded' : ''
                                        }`}
                                >
                                    {card.content}
                                </p>
                            </div>
                            <div className="causes-btn mt-4  flex justify-center items-center  mx-auto" id="footer-in">
                                <button
                                    className={`fancy-button ${isHovered ? 'hovered' : ''} ${isClicked ? 'clicked' : ''
                                        }`}
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                    onClick={() => handleButtonClick(index)}
                                >
                                    {expandedStates[index] ? (
                                        <>
                                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M246.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L224 109.3 361.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160zm160 352l-160-160c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L224 301.3 361.4 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3z" /></svg>

                                        </>
                                    ) : (
                                        <>
                                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M246.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 402.7 361.4 265.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-160 160zm160-352l-160 160c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 210.7 361.4 73.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3z" /></svg>

                                        </>
                                    )}
                                    <span className={`triangle ${isHovered ? 'show' : ''}`}></span>
                                </button>
                            </div>
                        </div>
                    </Col>
                ))}
            </Row>

        </Container>
    );
};

export default Blog;
