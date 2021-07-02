import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DraggableBox from './drag/dragbox';
/**
 * Medium Feed component
 */
const MediumFeed = ({ content }) => {
  const [articles, setArticles] = useState([])
  const [categories, setCategories] = useState([])

  useEffect(() => {
    
    // get categories
    const categoriesData = content.data.categories;
    let categoriesArray = [];

    for (let categoryItem of categoriesData)
      categoriesArray.push(categoryItem.category[0].text)


    // To compare array
    var compareArray = (arrayAgainst, array) => {
      return array.some(value => arrayAgainst.includes(value));
    };
    // fetch data
    const fetchData = async () => {
      const fetchURl = `https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F${content.data.username[0].text}`;
      const result = await axios(
        fetchURl,
      );

      // Compare Categories from Prismic to Categories of each article
      let articlesFilteredArray = [];    
      for (let resultItem of result.data.items) {
        let resultItemCategory = resultItem.categories;
        for (var i = 0; i < resultItemCategory.length; i++) {
            if (categoriesArray.indexOf(resultItemCategory[i]) > -1) {
              articlesFilteredArray.push(resultItem)
            }
        }
      }

      setArticles(articlesFilteredArray);
    };

    fetchData();
  }, []);

  return (
    
    <section
      className="medium-section" data-scroll-speed="2" data-scroll-section
    >
      <div className="container">
        {
          articles.map((article, i) => (
            <DraggableBox key={i} content={article} />
          ))
        }
      </div>
    </section>
  );
};



export default MediumFeed;
