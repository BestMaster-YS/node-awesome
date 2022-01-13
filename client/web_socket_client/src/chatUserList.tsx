import { useRecoilValue } from "recoil"
import { chatUserListAtom } from "./recoil/atom/chatUserListAtom"

export const ChatUserList = () => {
  const chatUserList = useRecoilValue(chatUserListAtom);

  return (
    <div></div>
  )
}
