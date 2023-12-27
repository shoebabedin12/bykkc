import React, { useState } from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const users = useSelector((state) => state.login.userLogin);
  const [isEditing, setIsEditing] = useState(false);
  const player = {
    name: users.user.fullName,
    age: users.user.age,
    beltColor: "Black",
    weight: "-75",
    achievements: ["1st Place Nationals", "2nd Place Regionals"],
    profileImage: users.user.image
  };

  
  const [editedPlayer, setEditedPlayer] = useState({ ...player });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedPlayer((prevPlayer) => ({
      ...prevPlayer,
      [name]: value,
    }));
  };

  const handleEditToggle = () => {
    setIsEditing((prevIsEditing) => !prevIsEditing);
  };

  const handleSave = () => {
    // You can send the editedPlayer to the server or update the state as needed
    // For now, let's just toggle back to display mode
    setIsEditing(false);
  };

 
  return (
    <>
      <div className="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0">
      <div
        id="profile"
        className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0"
      >
        <div className="p-4 md:p-12 text-center lg:text-left">
          <h1 className="text-3xl font-bold pt-8 lg:pt-0 capitalize">
            {isEditing ? (
              <input
                type="text"
                name="name"
                value={editedPlayer.name}
                onChange={handleInputChange}
              />
            ) : (
              player.name
            )}
          </h1>
          <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>
          <p className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
            Age:{" "}
            {isEditing ? (
              <input
                type="number"
                name="age"
                value={editedPlayer.age}
                onChange={handleInputChange}
              />
            ) : (
              editedPlayer.age > 0 ? editedPlayer.age : "Please write your age"
            )}
          </p>
          <p className="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start">
            Belt:{" "}
            {isEditing ? (
              <input
                type="text"
                name="beltColor"
                value={editedPlayer.beltColor}
                onChange={handleInputChange}
              />
            ) : (
              editedPlayer.beltColor
            )}
          </p>
          <p className="pt-2 text-sm">
            Weight:{" "}
            {isEditing ? (
              <input
                type="text"
                name="weight"
                value={editedPlayer.weight}
                onChange={handleInputChange}
              />
            ) : (
              editedPlayer.weight
            )}
          </p>
          <h3 className="pt-8 text-sm font-bold mb-2">Achievements:</h3>
          {isEditing ? (
            <ul className="list-disc pl-6">
              {editedPlayer.achievements.map((achievement, index) => (
                <li key={index} className="text-lg">
                  <input
                    type="text"
                    value={achievement}
                    onChange={(e) => {
                      const updatedAchievements = [...editedPlayer.achievements];
                      updatedAchievements[index] = e.target.value;
                      setEditedPlayer((prevPlayer) => ({
                        ...prevPlayer,
                        achievements: updatedAchievements,
                      }));
                    }}
                  />
                </li>
              ))}
            </ul>
          ) : (
            <ul className="list-disc pl-6">
              {editedPlayer.achievements.map((achievement, index) => (
                <li key={index} className="text-lg">
                  {achievement}
                </li>
              ))}
            </ul>
          )}
          <button onClick={isEditing ? handleSave : handleEditToggle}>
            {isEditing ? "Save" : "Edit"}
          </button>
        </div>
      </div>

      <div className="w-full lg:w-2/5">
        <img
          src={isEditing ? editedPlayer.profileImage : player.profileImage}
          className="rounded-none lg:rounded-lg shadow-2xl hidden lg:block w-full h-full min-h-[538px]"
          alt="Profile"
        />
      </div>
    </div>
    </>
  );
};

export default Profile;
