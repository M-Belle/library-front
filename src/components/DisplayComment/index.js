import axios from "axios";
import React, {useEffect, useState} from "react";
import styled from "styled-components";

const DisplayComment = ({ id }) => {
    const [comment, setComment] = useState([]);

    useEffect( () => {
        const fetchData = async () => {
            await axios.get(`http://localhost:3030/book/${id}/comment`).then((response) => {
                setComment(response.data)
            }).catch((err) => {
                throw new Error(err);
            })
        };
        fetchData();
    }, [id]);

    return (
        <div>
            {
                comment.map(({rating, description}) => {
                    return (
                        <Comment>
                            <Label>Note : {rating}/5</Label>
                            <Label>{description}</Label>
                        </Comment>
                    )
                })
            }
        </div>
    )
}

export default DisplayComment;

const Label = styled.label`
`;

const Comment = styled.div`
  justify-content: space-between;
  display: flex;
  margin-left: 40px;
  margin-top: 20px;
  background-color: #eaf2f8;
  border: 1px solid #2980b9;
  border-radius: 5px;
  padding: 10px;
`;
