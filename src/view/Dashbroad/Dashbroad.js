import React, { useEffect } from "react";
import StudentChart from "../../components/Chart/StudentChart";
import ClassChart from "../../components/Chart/ClassChart";
import Loading from "../../components/Loading";
import DataBox from "../../components/DataBox";

const Dashbroad = props => {

  useEffect(() => {
    props.getStatisticalData();
    props.toDashbroad();
  }, []);
  // ({name,total,specialized, total1, total2, total3, total4})
  return (
    <React.Fragment>
      {props.totalStudent > 0 && (
        <div className="dbContainer">
          <div className="dbContainer-1">
            <DataBox title="Tổng số sinh viên" value={props.totalStudent} />
            <DataBox title="Sinh viên chuyên ngành lập trình" value={props.totalDeveloper} />
            <DataBox title="Sinh viên chuyên ngành thiết kế" value={props.totalDesinger} />
            {/* <DataBox title="Sinh viên bảo lưu" value={props.totalReserving} /> */}
            <DataBox title="Tổng số lớp học" value={props.totalClass} />
            {/* <DataBox title="Số lớp đang làm project" value={props.totalDoingProjectCLass} /> */}
          </div>
          <div className="dbContainer-2">
            <div>
              <StudentChart
                title={["Sinh viên lập trình"]}
                total={props.totalDeveloper}
                name1="Game Development"
                name2="Full-Stack Web Development"
                name3="Mobile Apps Development"
                total1={props.totalGD}
                total2={props.totalWD}
                total3={props.totalMD}
              />
            </div>
            <div>
              <StudentChart
                title={["Sinh viên thiết kế"]}
                total={props.totalDesinger}
                name1="3D Aminton"
                name2="3D Modeling"
                name3="Digital Graphic Design"
                total1={props.total3DA + props.totalVFX}
                total2={props.total3DM}
                total3={props.totalGDG}
              />
            </div>
          </div>
          <div className="dbContainer">
            <div className="dbContainer-2">
              <ClassChart
                title={["Lớp"]}
                total={props.totalClass}
                name1="Đang Học"
                name2="Đang làm Project"
                total1={props.doingClass}
                name3="Tạm dừng"
                total2={props.totalDoingProjectCLass}
                total3={props.totaClassPasue}
                name4="Hoàn thành"
                total4={props.totaClassComplete}
              />
            </div>
          </div>
        </div>
      )}
      {props.loading && (
        <Loading type="TailSpin" height={50} width={50} color="#203e7d" />
      )}
    </React.Fragment>
  );
};

export default Dashbroad;
