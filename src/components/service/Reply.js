import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { initalizeReply } from "../../modules/reply";

export default function(id) {
  const dispatch = useDispatch();

  const reply = useSelector(reply => reply.reply);
  useEffect(() => {
    dispatch(initalizeReply(id));
  }, []);

  return reply.reply ?? {};
}