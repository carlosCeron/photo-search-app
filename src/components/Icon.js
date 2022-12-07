import Svg, { Defs, Image, Path, Pattern, Use } from "react-native-svg";

export const HomeIcon = ({ width, height }) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <Path fill="url(#pattern0)" d="M0 0H25V25H0z" />
      <Defs>
        <Pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <Use xlinkHref="#image0_10_24" transform="scale(.01563)" />
        </Pattern>
        <Image
          id="image0_10_24"
          width={64}
          height={64}
          xlinkHref="data:image/png;base64,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"
        />
      </Defs>
    </Svg>
  );
};

export const LocationIcon = ({ width, height }) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <Path fill="url(#pattern0)" d="M0 0H25V25H0z" />
      <Defs>
        <Pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <Use xlinkHref="#image0_10_25" transform="scale(.01563)" />
        </Pattern>
        <Image
          id="image0_10_25"
          width={64}
          height={64}
          xlinkHref="data:image/png;base64,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"
        />
      </Defs>
    </Svg>
  );
};

export const MessageIcon = ({ width, height }) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <Path fill="url(#pattern0)" d="M0 0H25V25H0z" />
      <Defs>
        <Pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <Use xlinkHref="#image0_10_23" transform="scale(.01563)" />
        </Pattern>
        <Image
          id="image0_10_23"
          width={64}
          height={64}
          xlinkHref="data:image/png;base64,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"
        />
      </Defs>
    </Svg>
  );
};

export const NotificationIcon = ({ width, height }) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <Path fill="url(#pattern0)" d="M0 0H25V25H0z" />
      <Defs>
        <Pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <Use xlinkHref="#image0_10_22" transform="scale(.01563)" />
        </Pattern>
        <Image
          id="image0_10_22"
          width={64}
          height={64}
          xlinkHref="data:image/png;base64,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"
        />
      </Defs>
    </Svg>
  );
};

export const ProfileIcon = ({ width, height }) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <Path fill="url(#pattern0)" d="M0 0H25V25H0z" />
      <Defs>
        <Pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <Use xlinkHref="#image0_10_26" transform="scale(.01563)" />
        </Pattern>
        <Image
          id="image0_10_26"
          width={64}
          height={64}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABAEAYAAAD6+a2dAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAABgAAAAYADwa0LPAAAAB3RJTUUH5gwFDyca0hxDLgAAGXtJREFUeNrlXXl8jFf3/54nExKEEpRG7FFbVGYmM0kQXiqVNmorwS9e1E4stS/l1SCxBlW09pLGK0GjqlEvWkSSmWSG2rfitbe1NpFYMs/5/ZG5o814JMgkfN7vf5l77r3nnnuf57n3nu85Ibzm0MfqY/Wxb77JvjkNchq0aEE7YIDB2xtrWabIevXgQr9imZcXLsOXM93deR8eUply5WgUPsesMmVEO7wIIzAlM5OmsQc3vXsX5ymRDt++jfb8CXadOYMp5MGLz5zBLBpJI48edYp75PnI88CB5CNHxh0Z9/vvxW2HFwUVtwIFhd9lrZfWS6djfx7CQ3r2xO+4RBWDguCDA/i8QYNiU6wCpvDkEyfgi+ZovmuXvEHSS/rY2LQLaRfSLqSlFbfd8sMrtwB0Z3VndWfLlkVfWSfrBg8mnbyJT/brh4M0iULq1Stu/QqMZhzF3585w0YplBqsXo21klEyfvml0cvoZfT688/iVk+g2BeA7xXfK75X3N2lCDlBThgzBuWxlhKGDsXPAO6WK/ey7fM0DMGohw8phmtyq2vXcJB2UEpGBiYjiMvcv28TjMQuyixdGs34A/Z3c0Mjiqe5Hh7YjnQklyjx0gOdAh3a3b2LGljIny5bRhWc/3D+Y8GCVM9Uz1TP27eLy/7FtAAkSa9Xq7Xf9+8PDxjQKzISV8kPddzdC9zEOU7DoZwcZJMWE0wmzgDRmp9+4uvcxTLi4EHntbSFtpw86XGkdu3atS9ejI+Pj4+Pt1gK2nzXrl27du3q5HS1yfnz58/XrPm4L3fhLg0aUFXa4vR5s2ZI5r1co3VrVMFp/lKjoTAaQgOcnAqsfygYlW7epAMA/zZpUuq3JrPJvGZNbqEsF9VMFNkC0PdoOkLfw8sL25ySLLU2bIA3CLv0+oLW5/m8F05GI/ZJWtzesIH70E/008aNadXSqqVVu3WrqMaRFxq1Rq1RV6zo1JkyKKN7d7SU01GhVy8aS61h0ekK3FBV/ANzU1NpidzZ4tKrV6rnoYBDAefOOVp/hy8A/UztCO2ILl3QhB+j7KpVmAUjdr7xRn71eB6PwS+7d6Mq1sttpk41epl3mnempjpa38KCb1ffrr5dmzaVPpZ/5d6TJyMRWnz/0UcwwIR0Ura7kZfw1xkZ/A0B9wYNMvY0BZgCNm50lJ4OWgCSpK+midZER0fDA99Q7MiR+VaxPgG4znvlseHhBoPZbDabTI4aeFFD97ZPgO5trRarKFF+Y+nSgr4huBVvwOjoaOMcc8P0nuPG5f5aeJ+IQlsADeMaxjWMK1HC7YxLQKmkdeuwnToguUcPxYEtwjBMzMykUfwFXMaMMRjM5vSQVasKe4CvJiRJ97Zmm2bbwIE0FomUNH8+ViENP5UurVhlA4D5sbEZh7MnZP3et++Jbie6nej26NHLavLSC8A28dNcWpWK+/ZblKNgXHz/fcUK1xGICUeOWAZQBZzq1i19avrU9KmnTzvI0q88/Hx8MnwyGjTgNUROfnFxGEwt4dq4sWKFe5yImj/8kBHx4Oesbp06vexCeMkFIEn6meor2hExMfk+8XOwnJdt3SrVca7qXDUsLPf4k53taAO35Jbckl1csrb+uSBrq07ntIwqI9nTU/aQJvLGypVtI7kqz6Yev/8uf4Bdlt8uXXL9xG2D24a0tH20j/bRgweO1lOj0Wg0mlKlVP0AGv/NN/gawLyOHRUrWN8IhnomU3qrXr1yf3z+N+cLL4Dcb/yiRQX4xsdz3IoV1avXnlB7wtChz3sce174XlFHqiNDQiRvVJQW9+mDuWTGP9u1y/cVmwe2T9Rqbocfd+5kP2rP5nXrjP1NJpNpxw5H6S+On/9tdP7XCzO//JISQfi//v0V9fzbHmHMmOft77kXgC5Wk6xJ7tGDFmM4jYiNfYZoPMetWGEwmGqbag8ebFWXC9tgvrV8a/nW8vWV3pe78sYFC5COPQhv0aKw+7FhGqI4cv9+Hi1Pdxo+Zozx9KFk4+n0dMd0RqSbrlFrT69Ykd9CoFAeRH1CQ1NHmwemhcfFFbQHqaCCfpd9kn2S69alZayjoC+/VBQsyztQf9s2l9QytcrUGjYs98fCn3j9fvU234ABA6R+chC3T0py+MQLRGASTQ4MpJuUJJ9LSdGXUAdq14txFjaYaxyvXafWp4MHw5u3w2fzZiVJ2Z9UXGX16tyb1YJfmRfwDSBJugPqe1p9Sori8cW6uaODzqNVfn5+jvrG6ywajW+VqCgKALjaxIn5mnAnRmH277/TOW6GlO3bEY6P4GM0ylvwkXzk2jWnddzdKZ6It9NHPKNqVfijJybp9dyGLqBb+/Y0E6nYVqlSvoqtwEFOiow0vGNyMblMmVLY47btEVbxPnpgMChuFvtiJs9ISTEMNgWbgps3z/1ReW+Q7wLIvbIdOBAgwvSvvrIzsPVbKe+mqzip1TpqVy+eeIyjCH60YoWi4EgAHtevYzEzBkyf7pLqZir9wZo1uZu5nJyC9pe7eVSpsrfeV99X9+tHu2UDrkyfDjP5o0aVKkr1OIZKo1S/fkav9P3p+8XVbuHBdmoYKo1zikhLU9rbcGXM5Bn9+xu3m4JNwatXK7WnuABsTpoRljfZ+/Rp5bt6ZkwfNCj3HP+MiXlB6PVqtVqt0aAikVQyJQU3ATx2drYTvAmgQ1KS82HLwpyWnTsnuR0OPBz4xx+FpUdAkybzmsyrXDlni2pAie1bt1IYtUFWs2Z2gu2hRcCjR1IGncRhP7+UOen70/cfOlTYdvFz12g0miFDuC5AtGxZ3nL+FH7o8McfJeY82v8w7u23k5KOHj169M6dvHKKewCbd05p4q03d3+/wCl88G7sltznz1eaeI7hPSh18GAFutf7brl33y3siRcQxA/34D/X3/2oTRsO48mcnJxsJ2j1Hsq9eDpPnzfPUXZJvWUymUxffYV5PI332fMOxKfr0RTnr0suGz1aqR27BWDzxwu3bF7ooYGWmQg/8Tix+Sn8mzu/yz7Jvl3btaN3qS3utGplJ5DJC/nfv/2m6pKz8lH7zp0Tz50bcW7Ew4eOMriA6IfcnR+qNnfuLPYYdoL9MI7Gt2mjO6tRa9RBQY7RRpapljSWmoaHi3mxE6lLR3Fv2LBm7s3cm7m7ueUttn8DWIkYSv54jmI/bNq+PfVbk8lkMpsdZWgOocNs6N1bUaAP7kttIyKKi5Jl6Gnoaej5229YShEYMmOGkhwxiKKfMY6XRKpn+tn0s0YjXGGC/ocf7PoPw+eYXr7843XZLR+OEsfxJ7BbADYGjtKArtIXXCsy0lEDElfLaEerUS842E7gAi/mmNu3czbSFLn8ypWO0qOgyKyXNStr1ooVHIMRmG7/jcUp6LD7/fdz3cZP2bsUEuThspbazpqlVE5ADNbbz6ttAQjOnRL1SvjjDfVMZpPZYHDUQNyaus52ne3jo8gI8oOJ2u/YYTKbzCbz48eO0qOgsN3Fp+C/bLZ/AoX723kbZVCGj4+j9EirduirtGopKQBaYfpTvKgzqQXKvf22zStphW0B2MiWCqA2aI9h69c72qAUKu+TLnp4KJaXo7c48tUjW1IiB0hzlPWynJTDaanyuAoNtTmYQjdsUCzvSKvkfz3x2Tz5BAiWbV5YqVc5jSmTF23a5Gj95S5OanZ/6y3F8mmoi7rXrztaj+cFR5C7nHT1qlK5FIItfEN5XIUFp+M5hx5O37iRY3g5r7T3uVB3VMesJ/MsifMtBiMLyfXr27Vo5dzlvnJv3nS4JUPlOhiuUimW90Q/9KNiJ7PmBbmxjt5W5gRSKA1nV6nAV+8vCrEppjDaRFcPH7YTWEuj0aJRIzHvUs4W53ed3w0MVKIqCbJlkVlyFY3nxsosWarLc6XTjn+SnhecgTZYVbWqYnkwDyPNUzaJDgKdZGDNnj12BdZ5tnQrcbnE5RYtJFskjRLWArJHUlJRKc5xUj+p38mTigIncIbd/fyKSp8CYwv58W1/f8Xyxagmf/SMcRU2xvMwuqA8b3xDzsKjxo0lZHIInfDyUhJUXQeAU6eKSu9S50udL3X+6FH0hy/+8RfevoD1eCiIHkWllxL8Lvtd9rvs6kqTOAhd7Y+twldS4dafff7sc+xYUenFx3mRVF953mgEHUL3evUkbKeFCHrKsc8aUCF49UWluI2BY+BpuJuYaCfwM4C75co92JipzdQ6yg1bcMg9cprkNBk+HDoaTr3tb9pQET5cZ8eOorqpFHCJLbfYJfbCBeGbsBO4wdPY18tL4hg8wvmKFfOWi0gaRzN4lMC/IVIuuXy5osAoXoxvJk/OvWCpXr2o9fM3+8z3mV+jBo3n7hg2aZKSnORCKlI9YxwOgvB+cihKPPXU1J2ysb1SJYmacSgH2a9cjqAJFJWZWdSKCxi3m78wf7F3r2Dg2AnUopEUVqGC0xTeR5yQ0JIbxjWMexLt6yiIfuRTVF/qn5CgFOfAY3gCp+3bl+qZ7p3uvW9fcdmRMjkKX2Vk2BX4cRca4uYmYQRtoGVPMdxOnswLn1KxiCFfkM5IZ4YOFZ8kuwHOpVZw8vF50M+1pGvJpCTxZBa2Hnp+h/Vcs6boB4vpX/Ru06Z55TiRl/KaBw+kKA6WM4cMKW77wUAHeP5T5lFN4ejl5ubwc+nLIi08LTwt/Phx1KP1WPEU76TAcUTQjHfekTdJG512/vKLfoJGo9FMnNhkXpN5TeYVnAwqIOrpSZ2svTJpEiaqtJa2hw+LfpTqUXlckmYMGZJ66JDbIbci3PUrgB9zFtooU/JIX1mdpDl165Z4pdpKGmEaT/3lF8MaUwdTB/uVXlywTYiOhqNjAZxSDQCUysrCbHzArX78ESVQB3UMBtSgeIq/ds0mN5Sv83UPD9QAaLxeDyOApUFBOAkgq1SpfPtJxAgePnGioYKpt6n3nDnFbScB3VmNRjvsyBEKA/523PfgVPx665aKD9Im2pWRQWEA8JcFkM2loSlbtrgHkBcGNgekV4uK0mvVdbWpN25gN06j1dKleIN0aOzqaldBTGAH7KAfOnXK/bFTJzTM81D8DNiuwQpC47jLRhzLzsYpbKH2Q4cayNwtvfe6dcVtn7yglhjHLdzc4Il59FcXXipt4eUZGRJ9jfe49lMYNNb4eMFTL+6BCIhoXMygqXy6cmW0hgVu9+4VuSKi3zuULYe8+aag0BW3fQQEpxE+mEeLn+KE+je7ov0ff0hw4aa06+xZOwErtelS3Jm4S3GensU1EMFk0dfRaHwbRUSohkBHbS5eRDA+pyWzZ+dH0nQYRL9WPaRP5Q7c89IloeeL7j0KC/d33N9xf0f16oocyioUQWlnz6psyY+2A+Rr35B81SnqcZSgHxfdhZCghOXUenDhQcdVq1AX0bTQwyOXBfscDQmW8CW0xcyTJ3GDK6LnxYt4H5kon5Vlkwuj7ryidGnsxTVcq14dTXEd1+vXh8bab34Qn5qKALtOneo6yfkt57c+/jiXEvbxx0Yvk9lk3rWrqOzn9CYO4ZByjCF/zj7495kzKj6Hwzh87JiSe02KoLJUNiAg96/vv3eUwraQqNq/fnah09y5PI8W8f5PPoEGJlqYv/dPkEMpASl0OTaW96uWUePERGNP43bjtgsXAJiw7S8VFtk1MR31AeQxmT419/jHW53VFvV775ELz+E5PXviR2ymrS1aKMb7WxcOLYEWup07dWc18D0eHV1jcu06NT+cMMHRF2zURr6LQ82acYOnm46qSKVQ4tgxEm5BSyvnsyV+vXEj74CEYY1e5jfS94tAg8KDLeBhCYIRvGkTPkEi7QwJybfiaszjuXv28C5ew2s++8w42hxjjjlwwFEGzQu/yxq1Ru3tzSHcn25OnoyWdBjvh4bmmwCiN4BxCQnU3jlBFdCzp6MCaPQdNWO1e1NScB0/YfxfnGdW8qjzLEtYTs8337Qpqg/WbNVsPX4ctzGLIhs2FL8LYgGlOZ9TnfTwsJEhXxKCI6fK4p1UOyEh37ByE0bzJ1ev0lgqR+X69EmdnR6SHrJ7d2Eb7kWhi1aHqcNatCAvrJAMK1cKCpZihU5oi7V792bUzlZnnQwOLqx4/9wHqmpV1RgMoqFXrmAxvsLyv/AQvuR9yD52zOBjLpN+3Nv7SYE1z13eBkXyIxqesyBnQefOhWMuSVJZuD/dXL8+v4nnUCzk6J07ne9YPC2ePj6v2sQLiDeQS8iD77NmabUifFuxwrf4D/q2bl2mvWsD1wYicufliS6qo1yaRnbubDfxwp5lKJDO/fij+NsmIBIcKjUsJ/BeUvXp87IK6vdoVmlWTZ4MF1qNyt27K8nxAADbly83jjYFmgI/+MBRAR+FjX10otuJbpmZuXH7YWHcm9diuvLFELVCH+obFpZrl0KIKRxP47mC8jxRGMPS6EnOIbsVp9+uztJ6nTql9ArjGK4kV/T3f96kTf4TtIHaQB8f2Y0boGlqqlL+Pf4Z63htTIzR1eRt8hZ8+tc/ZYzukWauZu7SpdQCmyjuKVfaIu1dXWjld/z8njdHkn6CRq1RN2+On0Ek2e+FOBqMd06dMjYzmdNXP8msav+KmCN54OYzghqvUgRFiGRF+UN86+UjPIpHxcQoTnwMj8TJxERXlzKNyzTu2zf319d/4gVcncuMKzNu5Eic4B9R5T//sROoS77wUal4PPZJvHLl88YR8DQOpwvK80IDeRGW2AeJ2juDrClNbZkt8za0FatoTadOurPqdup2+VOznGsAQO/eeTeXNsWtARWW7rSY6/fr97xRvK8LxLic33n8j4f/DQ0VoW155YR302a3fOA3SFteW75ZM2pNS1Hnww/zlgv7qm64dirpaR/dbbcAbLlsrSlN7Xp8csz5t5Q1f761Gbt2xArmdnyQbisTJgBajbljx5pMJpPJ9OrRvQsbtijdVviYbirbRV6L5jR4woRnX8VLEvtwLMcqB6HSDmTzlSVLDt46eOvgLXu3sKI7WOSyFSlN7cqt4dG6mVovrZf9N001lq/Q5tBQrKHmqFi7dt5yEV2bG0e/dm1xTEZxwrDUfC7d7+uvcRSMIPtIK3oPB7Gibt3L/r+2vdiyS5e85fozGrVGHR6OtfiUptqTUUXQ6oOROYNyBi1cqKSH4gIQSYxFLlvFkbThSYiKirKlghWoSQN5TWioYj1XioS/cOcWfgqZ1wOyzI0A3rlggaJEFWosq8PCxN+2FDD7oKM2yu5w+pQ/Q5mJE3+hX+gXsv+UC+RLCLElMRaZPPN2NApLMbtMGYyXIi1Htm4VFxF8BzWpftu2dg2W5vm8+cqV3GxbTyF9/o8hc1z2xOyJ27YpvWnRjiWUadtW2FXaaDkqu2zdqpgZxPpmzX3D5O+eLiAjSJZFEmM4swGnnpLv3pqzRjWQk+hWUhJFYDkWlSxpJ7cO/6FB8fGi3eKegOKGuAHkdN6ITvY5gSmYhtHHLi7CrthMn1K7Ro3sGmoF4I179+RaUknaJfIG5v9mLTAlTGSv5oek43rK6cqUvvm2ARGHUNmi84q9NviMstj3KeRXgXzsyu9gCUcMGZIekh6SHnL+fEG7fW5OoDHNZDaZ4+MRz+/BXXlzoQQLqapj4asX3VvccMqQ98h7XsAurvgn95o//0Wzir8wKdRQ3RyZ/uPYsfneeQtYI33kDnIHuYPjU8S+bri/x8IWvnnTRjXLBzwMHfjDb74x/GwaaRo5fvyL9vuSrGBZFtmrRRJjRVHrpkXkudPO0M7QzniGt+x/BP5faTQaTf36ru+qhpRYl5qqyG0UsNrZsggJSBA3pi9+inppWrjYxIjs1fm+EaybRadpchvunJaWe48QHm5V55WnqRcOJMmvlyZeEz98uKUJhtGktLT8soSLJz6nFLXj8x07FlaGFIf9wwjdBPUJbey8efQz9UK0cpoyG6wZLrkNL+bFo0e/bv8hJD/4XvEZ5HvF318Kl9z4THS0HVFDCdZv/N9f9YV3b+LwRAt+0eoVvl9068Zb8TFPXLkSj0mP+vnTzXkvD8Ov332Ha4iT9VFRr9uC8O+jzdJmBQRYgvgwH544MTe5dvv2+VZsBeCNe/d4L5hvDxhg23Q7CEWWaSNghkaj0dSpY6mEmZi5YYPSFeYzTTPdZOK7CGTLqlXcRIqRYhIS0uLT4tPib9woqnHkhbigcb4IAB07yhcAatm/P7UFsF+tLmg74gJHnOOf9zj3oii2fxuna69J1CT27YuB+J7So6IKnJRZYCQGYYgs40948lsGA8vsQZb9+8lX2oZDyckcIRkl49Gjrt+5fuf63eXLL5wr+MPsD7M/9PSkabJO1nl728iWrYkQHhiIbqiHCzqdEgNHCbYk1tYr27/f3BXd1Xix59pp3tzb29u7fHlbSlNrZkuR4PClO6gIwPnxY16EAPS4do3S+D3+5507+JOckPKX41ZZtsDf1RVv0b9oYIUKmAfgctWqirz654RwywrvnHDS5HdX72gU+wLICxEIIjJb2hIc5keyfMUgGDiCiCH88Upu2eLCK7cAlGBLcGjNc0cV8V8Oeu89XKZv6dOGDfOlYxc2RG7evhyNA8ePC7Kl4Ny9Lv/27rVZAEpontF0f9P9lSo9XqzarNocGCiSH4kcOCIVCk4iiBq5u3NrisMX5cvTJiRj1xNvGociAEH379Ne7obwO3fQALv4+K1bIoRKRNJIB3khxR09qtrPhx4nHDjwupBVlfD/J4B5dExCyQYAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjItMTItMDVUMTU6Mzk6MjYrMDA6MDCNZGI6AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIyLTEyLTA1VDE1OjM5OjI2KzAwOjAw/DnahgAAACh0RVh0ZGF0ZTp0aW1lc3RhbXAAMjAyMi0xMi0wNVQxNTozOToyNiswMDowMKss+1kAAAAASUVORK5CYII="
        />
      </Defs>
    </Svg>
  );
};