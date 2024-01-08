
const HomePage = () => {
    return (
        <div className="homePage">
            <h1 className="homePage__title">Добро пожаловать на <span>StorySparkle</span></h1>
            <p className="homePage__sub-title">O нас</p>
            <p className="homePage__description">
                Приветствуем вас на нашем веб-пространстве, 
                где мы делимся увлекательными и интересными историями, 
                мыслями и мнениями. Наша цель - создать уютное место, 
                где вы можете наслаждаться уникальным контентом, созданным нашим сообществом.
            </p>
            <p className="homePage__sub-title">Посты разных авторов</p>
            <p className="homePage__description">
                Загляните в раздел <span className="homePage__quotes">“</span>авторы<span className="homePage__quotes">”</span>, чтобы посмотреть их посты, 
                также чтобы быть в курсе всех событий и узнать новое. 
                Мы пишем о разнообразных темах, включая путешествия, 
                технологии, культуру и многое другое. Надеемся, 
                что найдете что-то, что вас заинтересует!
            </p>
        </div>
    )
}

export default HomePage