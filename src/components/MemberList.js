import React, { useState, useEffect } from 'react';

const MemberList = (props) => {
    const [members, setMembers] = useState([]);
    console.log(members.length);
    console.log(props.submission);

    useEffect(() => {
        if(props.submission)
            setMembers([...members, props.submission]);
    }, [props.submission]);
    
    if(!members || members.length === 0) 
        return <h3>No Members</h3>;

    return (
         <div className="members-contain">
            <h1>Member List</h1>
            {members.map((member) => (
                <div key={`${member.name}${Math.floor(Math.random() * 10000)}`}>
                    <div>{member.name}</div>
                    <div>{member.email}</div>
                    <div>{member.role}</div>
                </div>
            ))}
            </div>
    );
};

export default MemberList;