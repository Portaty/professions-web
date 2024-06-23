import React, { useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import BarChartRoundedIcon from "@mui/icons-material/BarChartRounded";
import FindInPageRoundedIcon from "@mui/icons-material/FindInPageRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import styled from "@/styles/Navbar.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const [collapsed, setCollapsed] = useState(true);
  const router = useRouter()
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar
        collapsed={collapsed}
        onMouseEnter={() => setCollapsed(false)}
        onMouseLeave={() => setCollapsed(true)}
        transitionDuration={1000}
        backgroundColor="#ffb703"
      >
        <Menu
          menuItemStyles={{
            button: ({ level, active, disabled }) => {
              if (level === 0)
                return {
                  "&:hover": {
                    backgroundColor: "#1f1f1f",
                    color: "#ffffff",
                    fontFamily: "Montserrat",
                  },
                };
            },
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "100vh",
              paddingVertical: 10,
            }}
          >
            <div>
              <MenuItem
                icon={<DashboardRoundedIcon />}
                className={styled.menuItem}
              >
                {" "}
                Inicio{" "}
              </MenuItem>
              <MenuItem
                icon={<BarChartRoundedIcon />}
                className={styled.menuItem}
                onClick={() => router.push('/stats')}
              >
                {/* <Link href="/stats" > Estadisticas </Link> */}
                Estadisticas
              </MenuItem>
              <MenuItem
                icon={<FindInPageRoundedIcon />}
                className={styled.menuItem}
              >
                {" "}
                Documentacion{" "}
              </MenuItem>
            </div>

            <div>
              <MenuItem
                icon={<SettingsRoundedIcon />}
                className={styled.menuItem}
              >
                {" "}
                Configuracion{" "}
              </MenuItem>
              <MenuItem
                icon={<LogoutRoundedIcon />}
                className={styled.menuItem}
              >
                {" "}
                Salir{" "}
              </MenuItem>
            </div>
          </div>
        </Menu>
      </Sidebar>
    </div>
  );
};

export default Navbar;
