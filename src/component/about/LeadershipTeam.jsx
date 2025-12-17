import "./LeadershipTeam.css";

function LeadershipTeam() {
    const gridItems = [
        // --- CEO (4x4) ---
        {
            id: 1,
            name: "Dev Venkatesan",
            role: "CEO & Founder",
            image: "images/about-img1.png",
            size: "size-xxl",
            type: "member"
        },

        // --- SCATTERED DECOS & MEMBERS ---

        // Deco 1: Small (1x1)
        {
            id: "deco-1",
            size: "size-sm",
            color: "blue",
            type: "decoration"
        },
        // Deco 2: Wide (2x1)
        {
            id: "deco-2",
            size: "size-md-wide",
            color: "dark",
            type: "decoration"
        },
        // COO (2x2)
        {
            id: 2,
            name: "Meenaskhi Sundaram",
            role: "COO",
            image: "https://res.cloudinary.com/duomzq5mm/image/upload/v1758172793/Gemini_Generated_Image_hmp2qvhmp2qvhmp2_heys1r.png",
            size: "size-lg",
            type: "member"
        },
        // Deco 3: Small (1x1)
        {
            id: "deco-3",
            size: "size-sm",
            color: "grey",
            type: "decoration"
        },
        // Deco 4: Tall (1x2)
        {
            id: "deco-4",
            size: "size-md-tall",
            color: "dark",
            type: "decoration"
        },

        // VP (2x2)
        {
            id: 3,
            name: "Sudesh T",
            role: "VP",
            image: "https://res.cloudinary.com/duomzq5mm/image/upload/v1758172854/image_15_lketxc.png",
            size: "size-lg",
            type: "member"
        },
        // Deco 5: Wide (2x1)
        {
            id: "deco-5",
            size: "size-md-wide",
            color: "blue",
            type: "decoration"
        },
        // Deco 6: Small (1x1)
        {
            id: "deco-6",
            size: "size-sm",
            color: "dark",
            type: "decoration"
        },
        // Deco 7: Wide (2x1)
        {
            id: "deco-7",
            size: "size-md-wide",
            color: "grey",
            type: "decoration"
        },
        // Deco 8: Small (1x1)
        {
            id: "deco-8",
            size: "size-sm",
            color: "blue",
            type: "decoration"
        },
        // Deco 9: Wide (2x1)
        {
            id: "deco-9",
            size: "size-md-wide",
            color: "dark",
            type: "decoration"
        },
        // Deco 10: Wide (2x1) -> LOGO IMAGE
        {
            id: "deco-10",
            size: "size-md-wide",
            image: "images/logo-11.png", // Using public path directly
            type: "image-deco"
        }
    ];

    return (
        <section className="leadership-section">
            <div className="container">
                <h2 className="leadership-title">Meet our Leadership Team</h2>

                <div className="bento-grid">
                    {gridItems.map((item) => {
                        // Case 1: Pure Decoration (Color Box)
                        if (item.type === "decoration") {
                            return (
                                <div
                                    key={item.id}
                                    className={`bento-item deco-box ${item.color} ${item.size} is-decoration`}
                                ></div>
                            );
                        }
                        // Case 2: Image Decoration (Logo/PNGs)
                        if (item.type === "image-deco") {
                            return (
                                <div key={item.id} className={`bento-item ${item.size} is-decoration`}>
                                    <img src={item.image} alt="Decoration" className="deco-img" />
                                </div>
                            );
                        }
                        // Case 3: Team Member
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
