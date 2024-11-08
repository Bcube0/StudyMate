import React, { memo, useState, useRef, useEffect } from "react";
import { connect } from "react-redux";
import CoursesComponent from "./CoursesComponent";

const CoursesContainer = memo((props) => {
  const { navigation } = props;
  const [isLoading, setLoading] = React.useState(false);

  const folderDetailsPress = (item, index) => {
    navigation.navigate("FolderDetailsContainer", { data: { item: item } });
  };

  return (
    <CoursesComponent
      folderDetailsPress={folderDetailsPress}
      props={props}
      isLoading={isLoading}
    />
  );
});

const mapStateToProps = ({ userSession }) => ({
  userData: userSession,
});
const mapDispatchToProps = (dispatch) => ({});
export default connect(mapStateToProps, mapDispatchToProps)(CoursesContainer);
