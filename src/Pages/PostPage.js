import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import axios from "axios";
import { postDetails } from '../Services/postService';
import keycloak from '../keycloak';

function PostPage(){
const {postId} = useParams();

useEffect(() => {
    postDetails(keycloak, postId).then(res => console.log(res))
}, [])


    return(
        <div>{postId}</div>
    )
}

export default PostPage