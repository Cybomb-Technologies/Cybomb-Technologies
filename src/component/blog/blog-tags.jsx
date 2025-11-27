import { Link } from "react-router-dom";
import { tagRoutes } from "./tagRoutes"; 
import { Badge } from "react-bootstrap";
import styles from "./blog-details.module.css";

function BlogTags({ tags }) {
  return (
    <div className="d-flex flex-wrap gap-2">
    <div className= {`${styles.taglink} mx-2`}>
      {tags.map((tag, index) => {
        const path = tagRoutes[tag.toLowerCase()];
        return path ? (
          <Link key={index} to={path} className={`${styles.taglink} mx-2`}>
            <Badge className={styles.customTag}>
          #{tag}
        </Badge>
          </Link>
        ) : (
          <span key={index} className={styles.tagPlain}>#{tag}</span>
        );
      })}
    </div>
    </div>
  );
}

export default BlogTags;
