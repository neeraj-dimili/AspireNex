export const stackIconGetter = stack => {
      if(stack.toLowerCase() === "python") return "https://i.pinimg.com/originals/82/a2/18/82a2188c985ce75402ae44fc43fe7e5e.png";
      if(stack.toLowerCase() === "flask") return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmD38KsMgEwahtWc_Nfs5ZVktP9dBc36MUZA&s";
      if(stack.toLowerCase() === "html") return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHtp_eNNg-91xIe_s7Q8dv02ITvx3MnKMTMA&s";
      if(stack.toLowerCase() === "css") return "https://i.pinimg.com/originals/e4/3e/4c/e43e4cd41ddffc21d2e6600dfca20306.jpg";
      if(stack.toLowerCase() === "pandas") return "https://seeklogo.com/images/P/pandas-logo-776F6D45BB-seeklogo.com.png";
      if(stack.toLowerCase() === "scikit") return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3ioErrXCaT2yZgsMaefs8irg9dRTWVk882Q&s"
      if(stack.toLowerCase() === "java") return "https://static-00.iconduck.com/assets.00/java-icon-256x256-k4ufhihr.png"
      if(stack.toLowerCase() === "js") return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyTvo53hbY9B5GYfv5QU3-hysFHvHpwjwbHw&s"
      return "../../"
}