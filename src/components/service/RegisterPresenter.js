import React from "react";
import styled, { css } from "styled-components";
import palette from "../../lib/styles/palette";
import { remcalc } from "../../lib/styles/utils";
import ProgressIcon from "../common/ProgressIcon";
import Button from "../common/Buttons/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function RegisterPresenter({
  onChange,
  onInput,
  onSelect,
  onClick,
  onSubmit,
  imgBase64,
  img2Base64,
  category,
  subCategory,
  form,
  error,
}) {
  console.log("img", imgBase64);
  console.log("img2", img2Base64.length);
  //const hashTag = ["하이라이트", "형광펜", "공부할때", "일상", "디자인"];
  return (
    <Bg>
      <Wrapper>
        <TitleBar>
          <TitleText>서비스 등록하기</TitleText>
          <ProgressIcon step="2"></ProgressIcon>
        </TitleBar>
        <InfoWrap>
          <SubTitleText>
            프로필 등록 <em>(필수)</em>
          </SubTitleText>
          <Form>
            <FormListWrap flex>
              <FormList center>
                <ImgBox imgUrl={imgBase64}>
                  <GuideWrap img={imgBase64}>
                    <FontAwesomeIcon icon={["far", "image"]} size="4x" />
                    <Caption>썸네일 이미지</Caption>
                    <Desctext>
                      256X256 사이즈가 가장 보기 좋습니다. <br />
                      다른 사이즈는 잘릴 수 있습니다. <br />
                      <em>예) 로고, 이미지, 간결하면 좋습니다.</em>
                    </Desctext>
                  </GuideWrap>
                </ImgBox>
                <ImgUpload>
                  <Label>
                    <Input
                      name="file1"
                      id="file1"
                      type="file"
                      onChange={onChange}
                    />
                  </Label>
                </ImgUpload>
              </FormList>
              <RestAlign>
                <FormList>
                  <Label htmlFor="title">서비스 이름을 적어주세요.</Label>
                  <InputWrap>
                    <Input name="title" id="title" onInput={onInput} />
                  </InputWrap>
                  <Alert>
                    이름을 정확하게 등록해주세요. 특수 문자는 불가능합니다.
                  </Alert>
                </FormList>
                <FormList>
                  <Label htmlFor="companyname">회사명을 적어주세요.</Label>
                  <InputWrap>
                    <Input
                      name="companyname"
                      id="companyname"
                      onInput={onInput}
                    />
                  </InputWrap>
                  <AddWrap>
                      <Alert>
                        이름을 정확하게 등록해주세요. 특수 문자는 불가능합니다.
                      </Alert>
                    {/*                     <CheckWrap>
                      <Checkbox id="selectNickname" type="checkbox"></Checkbox>
                      <CheckLabel htmlFor="selectNickname">
                        닉네임으로 선택
                      </CheckLabel>
                    </CheckWrap> */}
                  </AddWrap>
                </FormList>
                <FormList>
                  <Label htmlFor="url">서비스 주소를 적어주세요.</Label>
                  <InputWrap>
                    <Input name="url" id="url" type="text" onInput={onInput} />
                  </InputWrap>
                  <Alert>
                    이름을 정확하게 등록해주세요. 특수 문자는 불가능합니다.
                  </Alert>
                </FormList>
              </RestAlign>
            </FormListWrap>

            <FormListWrap>
              <FormList flex>
                <Label>서비스의 분류를 선택해주세요.</Label>
                <SelectGroup>
                  <SelectWrap>
                    <Select onChange={onSelect} id="category">
                      {category &&
                        category.length > 0 &&
                        category.map((item, index) => (
                          <Option key={index} value={item.mcode}>
                            {item.name}
                          </Option>
                        ))}
                    </Select>
                  </SelectWrap>
                  <SelectWrap>
                    <Select onChange={onSelect} id="subCategory">
                      {subCategory &&
                        subCategory.length > 0 &&
                        subCategory.map((item, index) => (
                          <Option key={index} value={item.mcode}>
                            {item.name}
                          </Option>
                        ))}
                    </Select>
                  </SelectWrap>
                </SelectGroup>
              </FormList>
              {/*               <FormList>
                <DescWrap>
                  <Label htmlFor="descService">
                    어떤 서비스인지 50자로 표현해주세요! 서비스 소개에
                    노출됩니다.
                  </Label>
                  <textarea
                    name="descService"
                    id="descService"
                    maxlength="50"
                  ></textarea>
                </DescWrap>
              </FormList> */}
              <FormList>
                <Label htmlFor="publishType">서비스 등록하기</Label>
                <ButtonWrap>
                  <StyledButton id="mobile" onClick={onClick}>
                    모바일 등록하기
                  </StyledButton>
                  <StyledButton id="web" onClick={onClick}>
                    웹사이트 등록하기
                  </StyledButton>
                </ButtonWrap>
              </FormList>
            </FormListWrap>
          </Form>
          <Notice>
            현재 제공되어 있는 서비스만 등록해주세요. 둘 중에 하나만 등록해도
            괜찮습니다. 서비스 등록을 위한 주소를 입력해주세요.
          </Notice>
        </InfoWrap>

        <InfoWrap>
          <SubTitleText>추가 정보 등록하기</SubTitleText>
          <Form onSubmit={onSubmit}>
            <FormListWrap>
              <FormList>
                <Label>사진 추가하기</Label>
                <AddImgWrap>
                  {img2Base64 &&
                    img2Base64.length > 0 &&
                    img2Base64.map((img2, index) => (
                      <>
                        <ImgBox imgUrl={img2} key={index}>
                          <GuideWrap></GuideWrap>
                        </ImgBox>
                      </>
                    ))}
                  <ImgBox>
                    <GuideWrap>
                      <FontAwesomeIcon icon={["far", "image"]} size="3x" />
                      <Caption>이미지 크기</Caption>
                      <Desctext>
                        <em>
                          가로형 1024 X 500 <br />
                          세로형 720 X 1280
                        </em>
                      </Desctext>
                      <Label>
                        <Input
                          name="file2"
                          id="file2"
                          type="file"
                          onChange={onChange}
                        />
                      </Label>
                    </GuideWrap>
                  </ImgBox>
                </AddImgWrap>
              </FormList>
              <FormList>
                <IntroWrap>
                  <Label htmlFor="introService">서비스 소개 작성</Label>
                  <textarea
                    name="content"
                    id="content"
                    onInput={onInput}
                  ></textarea>
                </IntroWrap>
              </FormList>
              {/*               <FormList>
                <Label htmlFor="introService">해시태그 추가하기</Label>
                <HashWrap>
                  <Input
                    name="addHash"
                    id="addHash"
                    type="text"
                    placeholder="추가하기"
                    size="5"
                  />
                  <HashTag>
                    <ul>
                      {hashTag.map((item, index) => (
                        <li key={index}>
                          <button type="button">{item}</button>
                        </li>
                      ))}
                    </ul>
                  </HashTag>
                </HashWrap>
              </FormList> */}
            </FormListWrap>
            <BottomButtonWrap>
              <Button color="blackngray" fullwidth border>
                뒤로가기
              </Button>
              <Button color="tealnblack" fullwidth border type="submit">
                등록하기
              </Button>
            </BottomButtonWrap>
          </Form>
        </InfoWrap>
      </Wrapper>
    </Bg>
  );
}

export default RegisterPresenter;

const Bg = styled.div`
  background: ${palette.gray0};
  padding-top: 40px;
  padding-bottom: 40px;
`;

const Wrapper = styled.main`
  width: ${remcalc(815)};
  margin: 0 auto;
`;

const TitleBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`;

const TitleText = styled.h2`
  font-size: ${remcalc(24)};
`;

const SubTitleText = styled.h3`
  font-size: ${remcalc(20)};
  margin-bottom: 15px;

  em {
    color: ${palette.teal2};
    font-style: normal;
  }
`;

const InfoWrap = styled.div`
  padding: 22px ${remcalc(30)};
  width: 100%;
  background: white;
  border: 1px solid ${palette.gray2};

  & + & {
    margin-top: 28px;
    border-bottom: none;
  }
`;

const Form = styled.form``;

const FormListWrap = styled.ul`
  ${(props) =>
    props.flex &&
    css`
      display: flex;
    `}

  & + & {
    margin-top: 30px;
  }

  li + li {
    margin-top: 30px;
  }

  div > li + li {
    margin-top: 10px;
  }
`;

const FormList = styled.li`
  ${(props) =>
    props.center &&
    css`
      text-align: center;
    `}

  ${(props) =>
    props.flex &&
    css`
      display: flex;
      justify-content: space-between;
      align-items: center;
    `}
`;

const RestAlign = styled.div`
  flex: 1;
`;

const ImgBox = styled.div`
  width: 256px;
  height: 256px;
  border: 1px solid ${palette.gray2};
  color: ${palette.gray2};
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: ${remcalc(22)};
  margin-right: ${remcalc(30)};
  background: url(${(props) => props.imgUrl});
  background-repeat: no-repeat;
  background-size: contain;

  & + button {
    text-align: center;
    margin-top: 15px;
    border: 1px solid ${palette.gray9};
    color: ${palette.gray9};
    font-size: ${remcalc(14)};
    background: white;
    margin-right: ${remcalc(30)};
  }
`;

const GuideWrap = styled.div`
  width: inherit;
  display: ${(props) => props.img && "none"};
`;

const Caption = styled.h4`
  font-size: ${remcalc(14)};
  color: ${palette.gray5};
  margin-bottom: ${remcalc(10)};
`;

const Desctext = styled.p`
  font-size: ${remcalc(12)};
  color: ${palette.gray2};
  margin-bottom: ${remcalc(14)};

  em {
    color: ${palette.gray5};
    font-style: normal;
  }
`;

const ImgUpload = styled.div`
  margin-top: 15px;
  margin-right: ${remcalc(30)};

  label {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    cursor: pointer;
    color: ${palette.gray9};
    border: 1px solid ${palette.gray5};
    &:hover,
    &:focus {
      background: ${palette.teal2};
    }
    border-radius: 14px;
    padding: 7px ${remcalc(16)};

    &::after {
      content: "썸네일 이미지 등록하기";
    }
  }

  input {
    display: none;
  }
`;

const InputWrap = styled.div`
  display: flex;
  margin-top: 10px;
  height: 40px;
  position: relative;

  button {
    width: 60px;
    height: 100%;
    background: ${palette.gray2};
    color: ${palette.gray7};
    border-radius: 0;
  }
`;

const Label = styled.label`
  font-size: ${remcalc(14)};
  font-weight: bold;
  text-align: left;
`;

const Input = styled.input`
  width: 100%;
  padding: ${remcalc(12)};
  border: 1px solid ${palette.gray2};
  font-size: ${remcalc(16)};
  flex: 1;
  outline: none;

  &:focus {
    border: 1px solid ${palette.teal2};
  }
`;

const CheckIcon = styled.span`
  font-size: ${remcalc(21)};
  padding: ${remcalc(9)};

  svg {
    vertical-align: top;
  }

  ${(props) =>
    props.complete &&
    css`
      color: ${palette.teal2};
    `}

  ${(props) =>
    props.error &&
    css`
      color: ${palette.red0};
    `}
`;

const AddWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: ${remcalc(39)};
`;

const Alert = styled.p`
  padding: 8px;
  font-size: ${remcalc(11)};
  color: ${(props) => (props.error ? "red" : palette.blue1)};
`;

const CheckWrap = styled.div``;

const Checkbox = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;

  & + label {
    font-size: ${remcalc(14)};
    font-weight: bold;
    color: ${palette.gray5};
    cursor: pointer;
  }

  & + label::before {
    content: " ";
    display: inline-block;
    width: 18px;
    height: 18px;
    border: 1px solid ${palette.gray2};
    vertical-align: bottom;
    margin-right: 5px;
    text-align: center;
  }

  &:checked + label::before {
    content: "✔";
  }
`;

const CheckLabel = styled.label``;

const SelectGroup = styled.div`
  display: flex;
`;

const SelectWrap = styled.div`
  position: relative;
  width: ${remcalc(240)};
  height: 36px;
  border: 1px solid ${palette.gray2};
  margin-left: 10px;

  select {
    width: 100%;
    height: 100%;
    padding: 0 30px 0 30%;
    border: none;
    font-weight: bold;
    border-radius: 0px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    font-size: 16px;
    color: ${palette.gray9};
    font-family: inherit;
  }

  &::after {
    position: absolute;
    right: 8px;
    top: 50%;
    display: block;
    content: "";
    border-top: 12px solid #b7b7b7;
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    transform: translateY(-50%);
  }
`;

const Select = styled.select`
  & + & {
    margin-left: 10px;
  }
`;

const Option = styled.option`
  font-size: ${remcalc(14)};
  text-align: center;
`;

const DescWrap = styled.div`
  textarea {
    background: ${palette.gray0};
    margin-top: 10px;
    padding: 13px ${remcalc(16)} 0;
    width: 100%;
    font-size: ${remcalc(13)};
    resize: none;
    border: none;
  }
`;

const ButtonWrap = styled.div`
  display: flex;
  margin-top: 10px;
`;

const Notice = styled.p`
  margin-top: 15px;
  color: ${palette.gray7};
  font-size: ${remcalc(12)};

  &::before {
    content: "Notice";
    color: ${palette.teal2};
    font-size: ${remcalc(13)};
    font-weight: bold;
    margin-right: 5px;
  }
`;

const AddImgWrap = styled.div`
display:flex;
overflow-x:scroll;
  width: 100%;
  background: ${palette.gray0};
  padding: 14px ${remcalc(17)};
  margin-top: 10px;

  & > div {
    width: ${remcalc(150)};
    height: 180px;
    border: 0;
    line-height: ${remcalc(16)};

    & + & {
      margin-left: ${remcalc(16)};
    }

    label {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-weight: normal;
      font-size: ${remcalc(9)}
      cursor: pointer;
      color: ${palette.gray9};
      background: white;
      border: 1px solid ${palette.gray2};
      &:hover,
      &:focus {
        background: ${palette.teal2};
      }
      border-radius: 14px;
      padding: 4px ${remcalc(16)};

      &::after {
        content: "이미지 등록하기";
      }
    }

    input {
      display: none;
    }
  }
`;

const IntroWrap = styled.div`
  textarea {
    background: white;
    height: 200px;
    margin-top: 10px;
    padding: 13px 0;
    width: 100%;
    font-size: ${remcalc(16)};
    line-height: ${remcalc(28)};
    border: none;
    border-top: 1px solid ${palette.gray2};
    border-bottom: 1px solid ${palette.gray2};
    resize: none;
    outline: none;
  }
`;

const HashWrap = styled.div`
  display: flex;

  margin-top: 10px;
  color: ${palette.gray9};

  input {
    width: ${remcalc(120)};
    flex: 0;
    margin-right: ${remcalc(8)};
    padding: 3px ${remcalc(20)};
    font-size: ${remcalc(16)};
    border: 1px solid ${palette.gray2};
    background-color: ${palette.gray1};
    border-radius: 16px;
    outline: none;
    text-align: center;

    &::placeholder {
      color: ${palette.gray9};
    }
  }
`;

const HashTag = styled.div`
  ul {
    display: flex;

    li {
      margin-top: 0;

      button {
        padding: 3px ${remcalc(15)};
        font-size: ${remcalc(16)};
        border: 1px solid ${palette.gray2};
        background-color: white;
        border-radius: 16px;
        cursor: pointer;
        outline: none;
      }
    }

    li + li {
      margin-left: ${remcalc(8)};
    }
  }
`;

const BottomButtonWrap = styled.div`
  display: flex;

  button + button {
    border-left: none;
  }
`;

const StyledButton = styled.span`
  display: inline-block;
  cursor: pointer;
  /* background-color: #1ae1cc; */
  border: 1px solid black;
  padding: 3px;
  margin-right: 10px;
  &:hover {
    background-color: #1ae1cc;
  }
`;
