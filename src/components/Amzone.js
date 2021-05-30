import Avatar from "@material-ui/core/Avatar";

const cardAction = () => {
     const avatar = { cursor: "pointer", margin: "0 5px" };

     return (
          <div
               style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: 25,
               }}
          >
               <Avatar
                    title="banggood"
                    style={avatar}
                    src="https://is1-ssl.mzstatic.com/image/thumb/Purple114/v4/d3/e1/cd/d3e1cd1a-6669-601f-3040-8dd79a58de69/AppIcon-1x_U007emarketing-0-7-0-0-85-220.png/1200x630wa.png"
               />
               <Avatar
                    title="Amazone"
                    style={avatar}
                    src="https://iconape.com/wp-content/files/mk/33892/svg/amazon-icon-1.svg"
               />
               <Avatar
                    title="banggood"
                    style={avatar}
                    src="https://is1-ssl.mzstatic.com/image/thumb/Purple114/v4/d3/e1/cd/d3e1cd1a-6669-601f-3040-8dd79a58de69/AppIcon-1x_U007emarketing-0-7-0-0-85-220.png/1200x630wa.png"
               />
               <Avatar
                    title="Amazone"
                    style={avatar}
                    src="https://iconape.com/wp-content/files/mk/33892/svg/amazon-icon-1.svg"
               />
               <Avatar
                    title="Amazone"
                    style={avatar}
                    src="https://iconape.com/wp-content/files/mk/33892/svg/amazon-icon-1.svg"
               />
          </div>
     );
};
export default cardAction;
