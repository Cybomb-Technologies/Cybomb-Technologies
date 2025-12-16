import "./LeadershipTeam.css";

function LeadershipTeam() {
    const gridItems = [
        // --- ROW 1 ---
        // CEO (Large 4x4)
        {
            id: 1,
            name: "Dev Venkatesan",
            role: "CEO & Founder",
            image: "images/about-img1.png",
            size: "size-xxl",
            type: "member"
        },
        // Deco 1: Tiny (1x1)
        {
            id: "deco-1",
            size: "size-sm",
            color: "dark",
            type: "decoration"
        },
        // Member: Standard (2x2)
        {
            id: 2,
            name: "Meenaskhi Sundaram",
            role: "COO",
            image: "https://res.cloudinary.com/duomzq5mm/image/upload/v1758172793/Gemini_Generated_Image_hmp2qvhmp2qvhmp2_heys1r.png",
            size: "size-lg",
            type: "member"
        },
        // Deco 2: Wide Small (2x1)
        {
            id: "deco-2",
            size: "size-md-wide",
            color: "grey",
            type: "decoration"
        },

        // --- ROW 2 / Flow ---
        // Member: Standard (2x2)
        {
            id: 3,
            name: "Sudesh T",
            role: "VP",
            image: "https://res.cloudinary.com/duomzq5mm/image/upload/v1758172854/image_15_lketxc.png",
            size: "size-lg",
            type: "member"
        },
        // Deco 3: Tall Small (1x2)
        {
            id: "deco-3",
            size: "size-md-tall",
            color: "blue",
            type: "decoration"
        },
        // Member: Standard (2x2)
        {
            id: 4,
            name: "Divyadharshini Subramani",
            role: "Web Developer",
            image: "https://res.cloudinary.com/duomzq5mm/image/upload/v1755750475/team-5_mttqoe.jpg",
            size: "size-lg",
            type: "member"
        },

        // --- ROW 3 / Flow ---
        // Deco 4: Tiny (1x1)
        {
            id: "deco-4",
            size: "size-sm",
            color: "grey",
            type: "decoration"
        },
        // Member: Standard (2x2)
        {
            id: 5,
            name: "Lakshmi Pathy",
            role: "Full Stack Developer",
            image: "https://res.cloudinary.com/dcfjt8shw/image/upload/v1765886463/ukl1opko3limwypf0pvz.png",
            size: "size-lg",
            type: "member"
        },
        // Deco 5: Wide Small (2x1)
        {
            id: "deco-5",
            size: "size-md-wide",
            color: "dark",
            type: "decoration"
        },
        // Member: Standard (2x2)
        {
            id: 6,
            name: "Santhosh K",
            role: "Full Stack Developer",
            image: "https://res.cloudinary.com/duomzq5mm/image/upload/v1755750259/team-1_rkkmff.png",
            size: "size-lg",
            type: "member"
        },
        // Deco 6: Tiny (1x1)
        {
            id: "deco-6",
            size: "size-sm",
            color: "grey",
            type: "decoration"
        },

        // --- ROW 4 / Flow ---
        // Member: Standard (2x2)
        {
            id: 7,
            name: "Manoj M R",
            role: "UI & UX Designer",
            image: "https://res.cloudinary.com/dcfjt8shw/image/upload/v1765886189/nx9douz8xlirwnxjy4fp.png",
            size: "size-lg",
            type: "member"
        },
        // Deco 7: Wide Small (2x1)
        {
            id: "deco-7",
            size: "size-md-wide",
            color: "blue",
            type: "decoration"
        },
        // Member: Standard (2x2)
        {
            id: 8,
            name: "Devashree Salunke",
            role: "Frontend Developer",
            image: "https://res.cloudinary.com/duomzq5mm/image/upload/v1755750572/team-8_hpix5t.png",
            size: "size-lg",
            type: "member"
        },
        // Deco 8: Tall Small (1x2)
        {
            id: "deco-8",
            size: "size-md-tall",
            color: "dark",
            type: "decoration"
        },
        // Member: Standard (2x2)
        {
            id: 9,
            name: "Divya Baskaran",
            role: "Full Stack Developer",
            image: "https://res.cloudinary.com/duomzq5mm/image/upload/v1756106400/divya_daydeb.jpg",
            size: "size-lg",
            type: "member"
        }
    ];

    return (
        <section className="leadership-section">
            <div className="container">
                <h2 className="leadership-title">Meet our Leadership Team</h2>

                <div className="bento-grid">
                    {gridItems.map((item) => {
                        if (item.type === "decoration") {
                            return (
                                <div
                                    key={item.id}
                                    className={`bento-item deco-box ${item.color} ${item.size} is-decoration`}
                                ></div>
                            );
                        }
                        return (
                            <div key={item.id} className={`bento-item ${item.size} is-member`}>
                                <img src={item.image} alt={item.name} />
                                <div className="member-details">
                                    <h4>{item.name}</h4>
                                    <p>{item.role}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default LeadershipTeam;
