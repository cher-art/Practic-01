import css from './css/style.css';

// const body = document.querySelector("body")
// const list = document.querySelector(".list")

// const apiKey = "0b94267f02e949528f5e2039825f3f98";
// const mainUrl = "http://newsapi.org/";
// const backV = "v2";
// const endPoint = "everything";
// const endPoint1 = "top-headlines";
// const endPoint2 = "sources";
// const query = "bitcoin";
// const query1 = "italy";
// const query2 = "moon";
// const options ={
//     // metod: "GET", // "POST", "PUT", "PATCH", "DELETE"
//     headers:{ //______ ЗАОЛОВКИ _____ все ключи прописывать тут 
//         "X-Api-key": apiKey,
//         // "Authorization": apiKey,
//     },
//     // body: {
//     //     // тело , 
//     // }
// }

// // const url = `${mainUrl}/${backV}/${endPoint}?q=${query}&from=2020-09-02&sortBy=publishedAt&apiKey=${apiKey}`;
// // const url1 = `${mainUrl}/${backV}/${endPoint}?q=${query1}&from=2020-09-02&sortByd=publishedAt&apiKey=${apiKey}`;
// // const url2 = `${mainUrl}/${backV}/${endPoint}?q=${query2}&from=2020-09-02&sortBy=publishedAt&apiKey=${apiKey}`;
// const url3 = `${mainUrl}/${backV}/${endPoint}?q=${query}&from=2020-09-02&sortBy=publishedAt`;

// // fetch(url)
// // .then(res => res.json())
// // .then(data => console.log(data))

// // fetch(url1)
// // .then(res => res.json())
// // .then(data => console.log(data))

// // fetch(url2)
// // .then(res => res.json())
// // .then(data => console.log(data))

// fetch(url3, options)
// .then(res => res.json())
// .then(data => data.articles)
// .then(articles => createItem(articles))

// function createItem(data) {
//     data.map((obj) => {
//         const title = document.createElement("h2")
//         title.textContent = obj.title;
//         const link = document.createElement("a")
//         link.setAttribute("href", obj.url)
//         link.append(title)

//         const content = document.createElement("p")
//         content.textContent = obj.content;
//         const author = document.createElement("p")
//         author.textContent = obj.author;
//         const published = document.createElement("p")
//         published.textContent = obj.publishedAt;
//         const source = document.createElement("p")
//         source.textContent = obj.source.name;
//         const item = document.createElement("li")
//         item.append(link, content, author, published, source)
//         list.append(item)

//     })

//     // createItem(data)
// //     <template>
// //      <div>
// //       <li>
// //          <a href="">
// //           <h2>title</h2>
// //          </a>
// //        <p>content</p>
// //       <p>author</p>
// //       <p>published</p>
// //       <p>source.name</p>
// //       </li>        
// //     </div> 
// //   </template>
// }

document.querySelector('.list')

