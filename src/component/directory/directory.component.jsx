import React from 'react';
import MenuItem from '../menu-item/menu-item-component';
import './directory.styles.css';

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [
                {
                    title: "#1,500,000",
                    imageUrl: "https://i.ibb.co/F6bR0L8/bedroom.jpeg",
                    id: 1,
                    linkUrl: "hats",
                },
                
                {
                    title: "#750,000",
                    imageUrl: "https://i.ibb.co/R4y2q89/bedroom.jpeg",
                    id: 2,
                    
                },
                {
                    title: '#980,000',
                    imageUrl: 'https://i.ibb.co/WGxsjkc/bedroom.jpeg',
                    id: 3
                },
                {
                    title: '#780,000',
                    imageUrl: 'https://i.ibb.co/VVmxMV9/bedroom.jpeg',
                    size: 'large',
                    id: 4
                },
                {
                    title: '#600,000',
                    imageUrl: 'https://i.ibb.co/yWYsqP2/bedroom.jpeg',
                    size: 'Large',
                    id: 5
                },
                {
                    title: '#589,000',
                    imageUrl: 'https://i.ibb.co/qdJB3jV/bedroom.jpeg',
                    size: 'Large',
                    id: 6
                },
                {
                    title: '#910,300',
                    imageUrl: 'https://i.ibb.co/5vNrPYF/bedroom.jpeg',
                    size: 'Large',
                    id: 7
                },
                {
                    title: '#700,000',
                    imageUrl: 'https://i.ibb.co/HNZdHxk/bedroom.jpeg',
                    size: 'Large',
                    id: 8
                },
                {
                    title: '590,000',
                    imageUrl: 'https://i.ibb.co/q5HhXzW/bedroom.jpeg',
                    size: 'Large',
                    id: 9
                },
                {
                    title: '#909,290',
                    imageUrl: 'https://i.ibb.co/7Y7RFFm/bedroom.jpeg',
                    size: 'Large',
                    id: 10
                },
                {
                    title: '#650,000',
                    imageUrl: 'https://i.ibb.co/72zzRcT/bedroom.jpeg',
                    size: 'Large',
                    id: 11
                },
                {
                    title: '#700,000',
                    imageUrl: 'https://i.ibb.co/yWYsqP2/bedroom.jpeg',
                    size: 'Large',
                    id: 12
                },
                {
                    title: '#900,000',
                    imageUrl: 'https://i.ibb.co/JRw7Png/bedroom.jpeg',
                    size: 'Large',
                    id: 13
                },
                {
                    title: '#680,000',
                    imageUrl: 'https://i.ibb.co/q5HhXzW/bedroom.jpeg',
                    size: 'Large',
                    id: 14
                },
                {
                    title: '#990,000',
                    imageUrl: 'https://i.ibb.co/kgKSs1Z/bedroom.jpeg',
                }
            ],
        };
    }
    render() {
        return (
            <div className='directory-menu'>
                {this.state.sections.map(({ id, ...otherSectionsProps })=> (
                    <MenuItem key={id} {...otherSectionsProps} />
                )
                )}

            </div>
         
        );
    }
}
export default Directory;