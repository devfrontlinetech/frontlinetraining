import { Certificate, Instructor, OnlineClass, User } from '../../../svg';

const category_contents = [
<<<<<<< HEAD
  { icon: <OnlineClass/>, title: '30 Offline/', subtitle: 'Online Courses' },
=======
  { icon: <OnlineClass/>, title: '30 Offline /', subtitle: 'Online Courses' },
>>>>>>> e3c90b20ac0920393e83467f0d76f8a50acbbc12
  { icon: <Instructor/>, title: 'Top', subtitle: 'Instructors' },
  { icon: <Certificate/>, title: 'Industry', subtitle: ' recognized certifications' },
  { icon: <User/>, title: '600+', subtitle: 'Members' },
]

const CategoryArea = () => {
    return (
        <div className="features-area-2">
            <div className="container">
                <div className="features-grid-wrap">
                    {category_contents.map((category, i) => (
                        <div key={i} className="features-box features-style-2 edublink-svg-animate">
                            <div className="icon">
                                {category.icon}
                            </div>
                            <div className="content">
                                <h5 className="title"><span>{category.title}</span>{category.subtitle}</h5>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CategoryArea;
