import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { initalizeServiceDetail } from "../../modules/serviceDetail";

export default function(id) {
  const dispatch = useDispatch();

  // const serviceDetail = useSelector(serviceDetail => serviceDetail.serviceDetail);
  const { serviceDetail } = useSelector(({ serviceDetail }) => ({
    serviceDetail: serviceDetail.serviceDetail,
  }));
  useEffect(() => {
    dispatch(initalizeServiceDetail(id));
    window.scrollTo(0,0);
  }, []);

  return serviceDetail ?? {"user": [], "webreply": []};
}