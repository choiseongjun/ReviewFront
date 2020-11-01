import React, { useState, useEffect, useCallback } from "react";
import { withRouter } from "react-router-dom";
import RegisterPresenter from "../../components/service/RegisterPresenter";
import { useDispatch, useSelector } from "react-redux";
import { changeInput, changeImage } from "../../modules/service";
import Axios from "axios";

function RegisterContainer({ history }) {
  const dispatch = useDispatch();
  const { form } = useSelector(({ service }) => ({
    form: service.form,
  }));
  const [imgBase64, setImgBase64] = useState(""); // 파일 base64 인코딩
  const [img2Base64, setImg2Base64] = useState([]); //파일2
  const [imgFile, setImgFile] = useState(null); //파일
  const [imgFile2, setImgFile2] = useState([]); //파일2
  const [category, setCategory] = useState(null);
  const [subCategory, setSubCategory] = useState(null);
  const [error, setError] = useState(false);

  const handleChangeFile = useCallback(
    (event) => {
      if (event.target.id === "file1") {
        let reader = new FileReader();
        reader.onloadend = () => {
          // 2. 읽기가 완료되면 아래코드가 실행됩니다.
          const base64 = reader.result;
          if (base64) {
            setImgBase64(base64.toString()); // 파일 base64 상태 업데이트
          }
        };
        if (event.target.files[0]) {
          reader.readAsDataURL(event.target.files[0]);
          setImgFile(event.target.files[0]);
          const file = event.target.files[0];
          dispatch(changeImage({ file }));
        }
      } else {
        //다중이미지
        let reader = new FileReader();
        reader.onloadend = () => {
          // 2. 읽기가 완료되면 아래코드가 실행됩니다.
          const base64 = reader.result;
          if (base64) {
            const newImg2 = img2Base64.slice();
            newImg2.push(base64.toString());
            setImg2Base64(newImg2); // 파일 base64 상태 업데이트
          }
        };

        const file2 = event.target.files[0];
        reader.readAsDataURL(event.target.files[0]);
        imgFile2.push(file2);
        setImgFile2(imgFile2);
      }
    },
    [dispatch, img2Base64, imgFile2],
  );

  const handleSelect = (e) => {
    console.log(e.target.value)
    if (e.target.id === "category") {
      const code = e.target.value;
      
      // form.mcode=subCategory[0]
      
      category.filter(
        (item) => item.mcode === code && setSubCategory(item.subCategory),
      );
    } else {
      const code = e.target.value;
      dispatch(changeInput({ key: "categoryname", value: code }));
    }
  };

  const handleInput = useCallback(
    (e) => {
      const { name, value } = e.target;
      dispatch(changeInput({ key: name, value }))
      // checkExp(value)
      //   ? dispatch(changeInput({ key: name, value }))
      //   : setError(true);
    },
    [dispatch],
  );

  const handleClick = useCallback(
    (e) => {
      e.preventDefault();
      if (e.target.id === "mobile") {
        if (form.mobile_yn === "N") {
          dispatch(changeInput({ key: "mobile_yn", value: "Y" }));
          e.target.style.backgroundColor = "#1ae1cc";
        } else {
          dispatch(changeInput({ key: "mobile_yn", value: "N" }));
          e.target.style.backgroundColor = "white";
        }
      } else {
        if (form.web_yn === "N") {
          dispatch(changeInput({ key: "web_yn", value: "Y" }));
          e.target.style.backgroundColor = "#1ae1cc";
        } else {
          dispatch(changeInput({ key: "web_yn", value: "N" }));
          e.target.style.backgroundColor = "white";
        }
      }
    },
    [dispatch, form.mobile_yn, form.web_yn],
  );

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      const token = JSON.parse(sessionStorage.getItem("user"));
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      
      const formData = new FormData();
      
      formData.append("file", imgFile);
      formData.append(
        "webList",
        new Blob(
          [
            JSON.stringify({
              title: form.title,
              content: form.content,
              url: form.url,
              companyname: form.companyname,
              mcode: form.categoryname,
              mobileyn: form.mobile_yn,
              webyn: form.web_yn,
            }),
          ],
          {
            type: "application/json",
          },
        ),
      );
      imgFile2.forEach((file) => {
        formData.append("file2", file);
      });
      try {
        const { data } = await Axios.post(
          "http://49.50.173.236:8080/web/service",
          formData,
          config,
        );
        if (data.code === "1") {
          alert("저장되었습니다.");
          history.push("/shareFinish");
        }
      } catch (error) {
        console.log("error");
      }
    },
    [
      form.mobile_yn,
      form.categoryname,
      form.companyname,
      form.content,
      form.title,
      form.url,
      form.web_yn,
      history,
      imgFile,
      imgFile2,
    ],
  );

  const checkExp = (value) => {
    // eslint-disable-next-line no-useless-escape
    const regExp = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi;
    if (regExp.test(value)) {
      return false;
    } else {
      return true;
    }
    //특수문자 포함되있을경우 false , 없을경우 true
  };

  useEffect(() => {
    async function getCategory() {
      const { data: category } = await Axios.get(
        "http://49.50.173.236:8080/web/category",
      );
      setCategory(category);
      
    }
    getCategory();
  }, [form]);
  function smallCategory(item) {
    setSubCategory(item.subCategory);
  }
  return (
    <RegisterPresenter
      onChange={handleChangeFile}
      onInput={handleInput}
      onSelect={handleSelect}
      onClick={handleClick}
      onSubmit={handleSubmit}
      imgBase64={imgBase64}
      img2Base64={img2Base64}
      category={category}
      subCategory={subCategory}
      form={form}
      error={error}
      smallCategory={smallCategory}
    />
  );
}

export default withRouter(RegisterContainer);
