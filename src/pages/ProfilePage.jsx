import React, { useEffect, useState } from "react";
import Usercard from "../Components/Usercard";
import { useAuth } from "../context/AuthContext";
import { useHello } from "../context/HelloContext";
import { useBio } from "../context/BioContext";

function ProfilePage() {
  const { userProfile } = useAuth();
  const { greetings } = useHello();
  const { bio } = useBio();
  useEffect(() => {
    console.log(userProfile);
  }, []);

  return (
    <div>
      <p>Name: {bio.name}</p>
      <p> {greetings} </p>
      <p>Hobby: {bio.hobby} </p>
      <p>Best Food: {bio.bestFood} </p>
      <p>Age: {bio.age} </p>
      <p>favoriteColor: {bio.favoriteColor} </p>
    </div>
  );
}

export default ProfilePage;
