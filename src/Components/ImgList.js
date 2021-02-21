import React from 'react';
import Img from './Img';
import NoImages from './NoImages';
import '../App.css'

const ImageList = props => {
	const results = props.data;
        return(
                <>
                { results.length > 0? 
                        <div style={{marginTop: 60 }}>
                                {results.map((img)=> {
                                return(
                                        <div style={{display: 'flex',  justifyContent:'center', marginBottom: 60}} >
                                        <Img
                                                url={img.urls.thumb}
                                                name={img.user.name}
                                                key={img.id}
                                                created_at={img.created_at}
                                                title={img.description}
                                                description={img.alt_description}
                                                like_count = {img.likes}
                                                instagram = {img.user.instagram_username}
                                                username = {img.user.username}
                                                location = {img.user.location}
                                                twitter = {img.user.twitter_username}
                                        />
                                        </div>
                                )})}
                        </div>
	        : 
		<NoImages />
	        }
                </>
        );
};

export default ImageList;