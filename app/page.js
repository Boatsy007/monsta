"use client";

import {useEffect,useMemo,useState} from "react";

const roofingSrc="data:image/webp;base64,UklGRuQqAABXRUJQVlA4WAoAAAAQAAAA3wEAewAAQUxQSHceAAAB/yckSPD/eGtEpO4TEgO4jRuJA2DvA6//gq38KSCi/xMwX9Dkc2ySvown2Z6kPRTgMZvdPMWnHHTgIbX/s/sEHyZJLmoZaWY5wMy2LezOcoHZvWuS6KIiyQYSG8j2F93uGjI25KDjzIx0aMGWhkTykKi7vZpE8rzktyX9/OiIJG3PVFekh/agJvkjTaWVZEvSHZUS/kqP6KRLEuxJwK7OpwR8o7cPrRT4E+CE20q90pbAHoY7V/OmAe98KoA/Zlj4nJsMBm0bSYr5w97ZvRdARExAP8iHyAtzd9BKdRPdSaVTd3bbZTWl2pxWMDFhaMiabagcTocaRcYczNfsttaooaRdFbW5rknGRSWN1ksGLYeRLuqR0FJBUVJJDuyyvNE4fBDps+j7fqxtcyRJsq33E3UvDBtTyfXqEaAhdVM9g+ab6gn0FJrF3TyGVGGMMQjgyOQlVERUVCyWVzhVETEB3rBtO7Y3/r9tP87rfhDbqpIamXZYpMxY1di2PzbGtm3bM23Hdt1USaNGjZ4893Wd+4sL91Okn0/fRcQE8GucS9j3YEkZCL9cmamLY8ut5IVKDD/38Su0+QdvIi9TTPngI8Dimt/jZXp4+ppxBc5Dn/7Yi1RMYrygXvGRmxcnoQQFzeHx4aUJZ8Rwme5hiozpbALUTYDuuekFYvACd1BUAEr30PRGmdChUdrlKo2KSRD3yERBc3DIw70Wufe8x0yFv3zz4egemDRMZwcwqUGMvPdJALZfQNzzItxgA0J6wAgWqXrUk8Yl6B/IOw4j/q+jSCGBIoX+LxBGtJsCT6WDFIhgjZWAqhr300j/t4mgUTRGaiuBFHfDJouuVd/veuZt7nehLkZEq5/hV9rImflnPnfV0hFVuzZcc/WVm9wklYaqIu5uTZ1MV/t+dXDOTe4AaAjRoz35lUZo7Wve/5YX07p0ytVf+vFeICofcq9lcdFK8t0qEQXqgt+ACu57C+6g3JuKhjusHm2SAwYQfDeDVc9/0mFDVLbA1tSlpz70f34fVrngn+8FvP6dr1x2twonBnxDhCg4c5TO1pR/76GmUNbKbSeGbN9dMEecElW/UsLUXVVp5xioWvUuqEzFnLPm3n0y+yvcJfySEJBIVTfzT0N0XGvyIRk7+0I2EgxVssVqSt7s3rcfIEJ3C8SM2eQkbDrqhh7ytHdyoChEaJwDN8rPJIYzA96TgnrBeNkJ/fuYo0m2hYLjvpkxzkJJ2CtJ1CT3e3fccstVf7x6MyQd/MymnMXgV5Fy9WzGJ2cDkvjsrfFMmpLoHO8g1IChj1tATMm0l4USQ7Msbv+xG3/58EkQBz2u3RSZCfwd0Z/ySKcMIJGLG95OnkFmyhDt1uodStfdu4kumTtloJxvJ2OURP75U0ZIB7es9X9CDGhIB/4CPjrnFkB61vbt+SOGC6sNKB8jMj5e4M41JwmYIYcaTY7EZf96qQ5q4Qc9rEwjzhjlYv0PkVf8agjV6lmLb+HZK3KRaQ2GWwhHixGuXxIgHHREYIBMceB//xMdxMxjZIAgOPdo9K/WhZnxLYcMWCD28ew1Y6XokstrkONDMceFQoKE43bD1KsUH3ghOmjJC+9LQICIept+cVOeu2L2nC+SzK7PCNcwivGb8XkjSDKdLvckHBflw5S6EAQJpyAAAzj3PjoUOmhxwrIs2ia/5a03AL0/7R7FxIbXze7TWhW/6ak+b2AU0bVc7pgDPLye4WKjQlrSWbS76r2aOHgdlSrUkPKf/0WSXN76BwSR73tejqaceD3p8qwxI4mu+vQWlclv7ybUpSDpyIWJkrqQ6T+aOEiZQwATod78y2tDGZCSASdWj0ZVVdke4dVEn+esGBbqINyBTBbkI3jErDUoZQYulTo4+8oF0sFqPnXZ/814ygDGojlvYbjXk3b+p6LieRsyHZPccqZye0MOPJiFHOHytz/w0RKyE0qTZi8+bJgy1ILH/R/EwWpaA2C5/38xgZd+4JLLr9j5868i7uZWZPhSyZEM7cuHGK63//TX1HWq2HLsf+FNHJ98wiuucC5zC+FnLM46GMlEGzG+yx5EpD5M895MyvhujIAMhqe3HElIDrBliPALlpWq9KsiihpbBkFgxn8ccNmmctGjiYMRoA6YwYWkXBHhjLn7Kh9jWAocY+bj6yEqT1nlqMi5Au66kXpw/m1VdhPyhUWeOKnlYhIIjH27qCY3hNAgCGRBBvDtJSEw9h1CqMG+K3D7JDgQAiKnh4c3Q8DHbpdxTIAclKSCp9q4DuKUox0ToiBntyBS0h1DkjPtiqSJkEBOiRAChFJEtOWGkAxgoKJVqCWiLZSzaQ7lLAUVrQrnFsVIXalwS0I3oTQWDDxlTPK4SslQMLiSoOCLRUWzqpFTmACFqwxT5/zWR/N49/oXPwVIcftFqoBJ8+dNHdaBHdu37QIiaSAboB90VJX7dFTNDCjAGLcAQhCUZvqSuaMxvn3Ltn2w5YxIQMybN7Xwgdu23gqKpjvt5YFR4f7CqorgEDcfXiJsyQACD0hj4tSx5CbMoXgQJTKLT7nfMbP0sRt8enz9nU/+/ZrJEHFOBEw+6f4nrVw0ZThRje3feu0V5y8G0gAxZ3IvqRqe2cHFsYf2jEKqqnLjAZAXzYhwv8pC4+tL6tLs4dQLsOKYVcNIkfosf8iZi/JYUj6we+Mfv/9bsE1TwOxTT1192PReUI1vv+JX3/sNCkALj6otuXzrfqHXHCj3LF3DaODjWQFucSCbdltpSb3fRxusGChAa590BHWBAHZ5+RtOgJJ5Cjj+dQ9ZlQDbSAK84eNrBdFBHn7HiQcCM9XRJBfvGQMIyTme8J0ik9//iPGeDKJ383mbZFAu3rV6LEHG7LzuMFIB933+SoCMJQFf/8sPSOYkWP2u61cA2ELA2CXvhKTEB/bebTFI3vzZ50tdo1JxCG7JUvv0QO7ul9ggPWcMyEFJSvyJdjFvAAXFhT8HqixE2/Hx0t73iZNhm5Xg5E/uMVVGAmGwVdr+6QWJUAvEAmxBtpqAKcKyjBwzAfzdc8cTSDg2nbI+TH1eBCCRvW0lPWa99UQoLYXA2NLv/SlkgsSid+y3S0s02yn47OGkgs/4wxAI5JePLDoylwEtyOLlbXQW+4bweSH0q0w1IG7pAEN0Vuas59+PPiEahWl0LrT/iUvJmgiZxU981OTcVyAwrSKbgh/+N1moiawsQLSLplm5MOBezwAGrKGZopdAkBm/OLpk9TlDVZVE5+gz/z5TGVzmwQ8dyeMSrQI7i9NPw9XnLqoEhFhYMoq5dDZb5QoP7MMdEFOlLDBa65zmMdxh0KlrH0BJolHUDQJwLkYfuYYJNSc9eNRVJFrdIOoVxfj5s5CQwBIyE2uBRG2oR2QgmNKKN1AqQJz5i9UctpwqiXbVpOgzK6FBmH6/5VRF0CoAA2bB8SP5KxfS1zW2fT8FdRA3H+XkTDHu0Tnz+1tXEsB5Q3TNXcK8k4vsRKMY3CXLjo4JMCuX0A/R1SDaqxi610xEY4hGTUBdNKYAMXjoZsplJ4+PEqJRtfYwu/aGBph2CFUIqaXZgEqm9r/x8AHWCO/+YVHRbg48cg3A8Einqrfu1TVnOQAlTBVgVnTaidoYWkAVNIuJFBUjVi1JWkpLRyqBO2HR1RUzEm6KBtHZDuCago7akewiTPrhcXsQzWJAi98Q3frTyMEE1pC58WsP6eXCIo+7ppfbhMbJWSemLk77z+e0OuJW5tTz6IkIVDPr2+RNhUW7JgLCjFtCAGvKI2SJ7gbUBZm8j8bEhLrNTYDcQq/WG0OMmfqCEToOhItNhyraHDu2YSbSNKe9L37QTW2hi5xxXdEmFFyxINp04ExOd+TM5JOOy5JoXkezvPopoqNsS2Cj6FDfBAOWb8EC3OKMAKPoUN+4LWwgW0aKTrXNuSobxERqoZt6uSacLUDRiaw300EHfoPono2wJTVIk2eGtcPp1xdu8a6SO/X4Pjr015xXR1IvjbRsCYT+bqQKQEDKfwQlobz6DqZdzkq0V1IHU94A2SHB1VnUm7IL2ksC1CKuHhOYERJ1dwkDCxCGhKQzbFSjiqAx5wC1OO04kgAk4Jd9uVMVQWvZgHMmNtxyWeSm1KS8Yg53ajF0pHUHuoxAbQyLQKl8wcPLRHOOm/6E2d//F6GjXfC3X//+1jJNXn7SKQsoUxsU2/8/9P+4raDJNlWP9b/8w/o9Hl1wzANW0Q+1OfiDi6z936Qqit6kk6Z2qP99axGByc75RtwEcoBSOgGDIVJ3VuKay9fvHV589NGUEmoi+zUkkLB+dVWR6WiCq363bo9Hlx2xah7OABEIRNjytAKk0Db+pNRrytqzTW7A5DwHxAQrSi74yIjsk+iveA0CiHzcK3MAkkTVty89fwath713G53lf3CT03/OLSXR3Pe6ly2jdd4jn0dh2h0bflCh/X9/wcXnw9B315SpwXL/51+rFTAIqaEbgDAxTYlvfPDnWwCe+1+XEHR64EglAPnpx/ajQ2l/64I5NI4cuvYJ9DIg2sFCXSQdoFSu2pjWsGAGIHpF1CN2ZtIL/2VS1YJUPfXsKtXgZbMq0Wj6vvVFI5DUkPN1X/olcoecf06OWsprH10GqBH5k0sgiqLmipmf2SXUgvVxCxUpBe6P0bEaaiUJiQC6s2En1B6qsemLH4EQytz6le/03cGsPAoJVC18mkW7vfFxgJLA2cz40CaE2oDgGuOVK3fVhq6gdthZMnH2OS98QM5qCC7+rpdDkKrV51dBa/YVp0ARojl6XH45HajFiyLXcvHcwhLt/wNFSKqh1N/xs+1dcrphQRVkG3DZZsBCVxoVELNzF0gjDSG2/56IbOpFGjvQc7SQR08ggOChR1TRJq48iUhCAFL0d162AXGwd5e6Ql8eftV6amLVIuM0MnnWIStXqi81QcozzsiBJHji1Eo1g4t1q+iFaBSQSSWd89knO0HKJ5+ZE82CcSJRVw2ix4Fpxk2gBzpoFLlJAhV7bQUBQ1cOCs+BVNJqS+fR0RwLoNx7NAY3URxNT9AExBC7eqAuwUXyDlHR5XJeGcBDr2JCSwJQAqlDjyCDTbngAgfNZv8ZFBLtAjKxsNPoo2g8f3IFboAlpKAbGVbNzFJTlS4uKgNGRNNeMQeQwTT2hQzkuacwoMoHnJGjBeZjiHz0fR00K8+eTk/dyGbWfHdLXWTUd0isa6QlSkx6lgERNCoQ7j83y+Dg3CU5SWpIb6JgAqs5JxtsiPOmllI5cy0C3HDq/Bx0VA2ZB4dbcpy+ugpsILqoYCNDQRBISzYAA2KdX2TVXDOoKv59UoUbxEwZxJoZpZqUZ5xLT6JRTfUz5ue4quTq1MYKBxPYMxP7u0tMvYKzbZpzrHuLNIgA8bgja6Hlo45D4oSVrmGiOvJ8i4Ftlcc/LKcm50lnI9OoDshxZTD0y64Z+ZxzqqADAvm/z+4nMPXpQ1lk7k978IwFZdBRWLZVzXg2lN6yl8vAO9AdwvlCBgZ0gxoMBNk+QXMup54s1QTWR25NDGyIatnLAQJQjR5bO264ajK8YHaeAJD5t8nZNbvkvqoYPOAhhgAB6Qrk3r+MVGrALal61t+VCcCGoQSqph+Nakbl0n+2mEBFfv5RJenUuki+K6mXgRUr4aBREwbRaMA5sa/PdmnAwkU0GKe931KOYbJuuoRK/yhsVmGaM9/aJs8g+BKmHY6YltXkAGHiTiAiRABt7M33xoqqCQnN7xLaIhDmLm4CIn9dTLW+uS9JO08sKndIrg0HXOKgAQOis8FZid9ugAvuwoppuQGs664yc4NLyMAS2TqC9vDPJaZmfrW90FY5eyEDmF1aGRCQtnRlUPyVjob2nT24VIBZk0yjHVv/Ys/xNddLW+gqqcP1lzKw4sUDE24lfvrJm+kY5qUMYDBX7dUMgfnzm83e3Mn2pDmoJpz2XmlPjLX+WokI5Mmz20C6CQmHBbJLj9pTBzbjtkHF3tMFw+Jhq4HMdRs1QWnv1Ug3uEYqOnh12QayQGXY2E1C6pTKr7/2GwQSZAcL6XqDuyWARG3DDwLuxIIZ9szZRA3B2D4miBi7GkEAF5NaAtghHA8QTow927i9L4LMJLfALou54lb6llXEwduRoLM7OP3pcd/IKIMS2pObVNvPBLTu+RkCCEwegcmj1AWiLGnNkEDsrDUdQwya3cTsjusuCMrVhCSkpwBB1wxkCoxjh6SuYXep11afBko5L+DA1n2usrMhafGo1Ub5ruhl071sasxMfK4Aso8EKUDCAKIxwaFGMyi1WCEQd56jHRpdTYAczC53Kpj4Huktm8uWRK/NtbYwmJ/1m9QvbSD1H/zxKtREnnloFRpkd6dA09LtDndVCQfGMYh6r0BKmDrUFtFvqU+EplnGRyAQQQkNBDjU3ItazGgtM8x8BoNr2C0Qro6rra7eQNePPqlftKha9VinQTZ3mo2PpCXm/E6juWcfsWsHddVGpjLRWYsJJEAa244bkG6YqSP9+IT0xUSakLTS2FBGS7B4ehYzVc04ivRk0ZQBcm3ZBlwgA6ZS9C64SxELTyfanDb8BNSlsMfRIo4fqjQAaVk5p4qayLq1l7x3dwOgatIxaAJs8JOv7QUgWOzajFVHNUWhHGt0U9IiV4BpxClVgEhCCYGt+2Q1ENXTbkvGg6Wxa2ZQ0sFVMpCrK7eLJS0g56zsq8n3W1KpCayf3Jxyl7B+n9x2zCEMpGtmbcq0b6bnfRtxE+b+NLobdrHjuaUKAQK37RADCiQTRKvQM12LOKMW+kmQrZvANSnrPZdFZnBz7YyUQ1fW12tLBlYXXYV5VGG1QP5Wpvv6bU1C5awzSINEGOVZ56Gaatcg52tpF2umZ4GpZ6CMH7wnVYS93Lwn3FQ0QZiZijYI/dwSSMgESd1lh1h2XOsMSCKnzW8R4EFS3rKCoBtdRDvi5dp0IDkvY6kLVnXE2V2qtO4nsjvE9r/QAJgLIwYBY/ncVVXUgPAfsfgD4ZZ89LmWzcDW67cUpv83B9g2qSkBJ0TqUu25BSgFJ+yF0C++VDTbWZ+9NmUG1s1LisygdTWo9eouAywwrgBiq37OwhxNdtYlN0buki/FtkGkas15pG5ikHvPCtPstP5mDL+6JeyW9Jxhi4FzuumTykqr8HNsg6xomq3oYktWp4SZ4bB8/7bkJqy9P0SAJFwTEeWkQ6xOLsKAXt3iZcgZkL7oPRS3kBn/HpCO+d5YMs0uXjeHaMsOSPkZZ1YBSJDjUqIk3fBTMs1RnvnUnAYzn9mdMu263XgZmeZOAY9074CKLmwNe2nEkQA1/nKpcgPgdNtuHDQbIlV55QMA90xWGc7VZUDXqkoGVF55nxwt0Nt+Oe3m+OuPIzeIKI/7+iiFagEIqFc+9LUZSQKI/EWUifylHC2IV59b9jQIm24Iu0U+uSW5KYpastsLAYQAdpe2cBolvVIAGZTsgLS2XVL5sSraQJMPp1QKUVfF/OdfPIroWsoqGcj1OVA5PwNWrvAY4pzZWbW6deP10VCs6oNWA1L0/bXZJNGeUH/tJ6cSNOf0t41kyPru3yK35RmfeWCfpA4FNEZHt59+lPYoEO1hL013uS0kOyBGAMxuL+NCSKG7FYAc3/pFqlokMe3+yyjLqoEpT37NKbJAA9nWu353oZ43uEeGHkGzqX91XyAalaf8g9wABhatpFLCIFRlLQ5smiP7lSSA8DOOy6lpv/fv3lMRYISy+eDjiC1VM//uC6V2zpXxAATIRtiLCTPDaGhGfvT9y6QGYKdNX7rkr9vLHL1Fpz7lJKqQ6FyySIZydVVb5PzcJm4bh1UdcmyOGhJO27/hEK4RPn91mVCt8YjzFpNpHlrziCmGNrh8plRTnvt0Oid9+82XHaD1mGd8wGjk808gtCVnABkhgEBh2ClkpF+NPi7MAFUPtu0aK9OkOVPpYxhg2ZFw/R3MAlUbkHIMccZcqwbI8bMdAjXIo4+R6ShPe8q/PenyrePF1KWrz15LqQ6qjnokQWP4zFWlWoJd9H/+o19u2uvhGYef85DZBmwpT7+Ire6EcPZYX3eBEGdpOkkr8mEnWiM4q6DufgS2ye5SXWTcq1PbkmUnmeHeBXQVMyrhpsirViOpBZWseObubWO96TMKMl2VOY9Ex/NktRCqFJR7dntkyiTohwE4Z6YFBCQ5adCRlF13kgxWAW2LY+Y5KCCNdg0JwAp1YRV9h6jokvP67nSZgPJx98kdsk4+YNEErJpVBc0GRVkmATkT6sS9p4XalKcdAdoAY7sQkG2J4eVLM5W5mWFv1GxAWskEqYy6a5o5SQHtDFhx6Y91UW1c4/WlLqdLmXFLdAbw0Gk5WvCUE3a2YODQwi2AFGEsEAPOnp+DjvL0+QwbZAMCknQ8eTZiUDJCjjmFFPoyAzADw4bLJpB4Ijj8Ge8rZDRLWEfepclZQXRNpogpD0Ft5MMml9HUOIdwiwSYdnXQLAaeOwlIp9WAGBSTuGMPacd0ZLaMOIL46S9BQmfXDOXyZ3+5x15F1vfq3IXTINQkWLYpKJ90bFYbrN5pdTD7crhpQNGcxc49aBDBL4hHwB2E/eb21AkZoSEgIO1MGS9DwLe/zU1VdcE4F6zbMfrkL/bc7XU9SHJFkrrI+SkyprnczAEeNimntrL3hQsjtwGXb0a5ZnVqdt743E+Yuu0aCrvNiK7OBV/5EYftDmYC1ElmO8OOaACuuWSfekZSk51VsPs1f2Tq3mEGrZDFoheuOFOqA54nLLmJTBIzH0wVTabqPeWjqRrhz78j4YDBsgu++c/fxSlsuHQjRbaaRLvtgt1v+zwTKtxC5lxteLDlb/n057cArjCgJNj0rU8RQ7t7XVIvLB1i+asfUSUgJNgyRKCAIpWYGJIoJAqG3nJHWz2vLE2z5alOQvnElVgNUKWNp90UAxZXfeKn4FKSOjhbBds+9I+Euab82ud3UZRIotFgMj32fvltv8FjebwsE2CcqnzM/bKSal4eK9JYlo8lECxPdUouNyMIVR/cLSd+9r+vPu2YxVNoHNvy1+9+8zqKqtTQKOnwcAcukQbE/AnXbnOHFQo6fqzMQqz9Ozp/7eLxATDll978zDUjkO0WheCGL77/KkqdhBPr3vehG5eDMwYMioDNX37/7wmZMFqM0Do9TZhS0P7p0Pa04qN0P1WmxDCDUw3WCCZxNbOXHbZwTq/atnH9uk0mMR6qpkxvCnD3Clk3QHxyRhquoaA9C2x4Y4RyNsHLD3FWnvmiSUghkXMu/YEbhnCiz4kPPmvVoqB9z02//+73thCV+Xbwt9ec/eD7LhuifWz97773/ZsJMoeN3ncEQ+GqQkW1EcfkwJsWECLA8rNXiLDG37Q4JYSU7f67eMjc+OYbL7VKKK7rY0wGIFO4omOEM3LkpXYgIfDm9SruZF+YGFbqasp5N7yC7rOwuX2dUzYsXrliyewpoWrP1muuvnYPJGdOzQQw88hly+dPG00Hdm1dd+212yHITKg/TvcDMPZWuscWjL+b8RnrXsbMDECWJDfYpvU+9EP3u79kaXfv0vNAqcldlemKAapBwERUpnsom9s9O5zpHspmopMsIyycOZ6EGwIXAAtFuItIlYmKoaoFCETDxDoegSA7+cJTcQ0bszMlgOfpeS6b3o2SwIDANndUSWBAYJvbseL2rWgPCGCoyE6muxoa0M4xUWn8bOWCsA//R1gwzP/p4ZUmDtLwEJ7kKPN57y01ujasiXH87Fdh4ZqLV39IWQGK755Zptsh7GU0tD1HG0t8P5N43G1PWERO8mCM/ZSO5l8/RpYo+Ykfq3J0CDgSrsMuPkZ5PxMcueHjxamnkqtk26AGSZm+cRv6CwprBv/7d9zVqvjmVZL3sYqRH10xp8+KJz90+ABK2DU5m2OOFx2dtv7BMsgXPvfwEAQCCFYhexAIIkKJAbRqQiAaQlSCwfbGr6/j/2kS/+BTcxF91r7qCz++oqS9t/qJa8hdcvokhWXlYn5tHwBVws5GEZQGQapCiAEJRGQfxAgo8z42OHp7VSUISrH9N7+66tZ94wyNLjj65PtMBdyWh9Z/IQuRKu5qw5n3sYriK+5LAAkKIPdLiiKBy0C0W/9AYWWhQWxEIICRYC84EHcBhyr+fzZ4Su5XCQEI25KQ7SyJruXIe0i8vAYnrh8vK9HZgARAXfj9j5sXmYfv8vggzQKh1XDz0RpeYoN7/8YuQ4ONVzf88ImXWSkx8zU7ZlAGaKKy4u0XXvNyG3DSSy4aoU/ERLhKwff/4RFfblDA/Z/y0IVQWUItokTAj9/1FQovu2Gz/CEPO2U2QLaBhAJw848//YMSfOGBIMPyB5x64pLZk2h99cOv/OHHv74VUuYlWCkA5s1eOH/WULlvz96d+6kXlBdiRUHOdFahysuyEGoyzvza/+8PAQBWUDggRgwAAPBLAJ0BKuABfAA+PR6MRD+/oSIkVotr8AeJZSeNnp8PTaBfgE8J4z/QDUJfwr/QCCY/2D8ALxeJP6T+M2zXcn/Df8uumJ258CcaKjTqD+1/0P9cP9v/////+D/Qz5gH6Jf2/9K/7N+//eT8wH6n/7z+ze7T/p/6r7D/sl+AD+if1z1lPUW/tPqAfxj+kerF/jv+D/sf3/+hv9pP97/qv3/+gj+Zf1T/i/nz3AHqMfwDsm/7f+Jv6e+DDzTiQ7N26f3CwLPnHEd3lf5dxaMwz+df8X7dOnv+c+oF/E/5//vf732XfQG/UAt/ByM2x4tznPI63iUG6BfD6DT7H3U3li9+TMjHYFm335GXm9cNtw9a2h+vufnZzxkQDc8R2Vb7jNwIwStreyKceUMu6X7knNul+ma3mgANURBkVxOmwrZ7NsgXL6YSOTlDJv6ydmLdX6vfV36clUBf0M1bDMd3/98A/jSZoZfjsYdlECeczml6YACyjrbUgFqaFd0x6tgYyeVrRRPUloiTvZMZOtiKcrsKCnFWi/H6Qjf7bab8VLVLZfKQMIym3OgHQ9lCZe17KLzHbhnxE8hs/Y5D8ujVOMOki7H+xT8ysgBzdgwr2vye8BGGwQZYG8WGOgm48AyqhkiH+kgfT6ouURfqhgUN4yiTiV3OcSyEdfL1Tq3+h6cczAYxbiAMZnmeBztwrFqwSQJCegGiD1wTQutcVwCT02ZKwPT9BF/Bq0liOL0KP1VjpMTICKjnFrCbZdcr2kXPXWsJjpFiBb0ye5aslc1uNjphJ3cGgXw+g0+x91N5Yvh9BKNDq7FKZGAA/u6YTtNMdW8S0ZIymq9RNnAhTjJCY6dp/7h5yMXAbcaasS7BfVmt3wzSa/WDkwyenY6nJ+PoRDlDWqGkAAAALbPfqEcw6fduvscfM/KQuv3vOMyiUx60ws/jaLK5teLysHFn8bRZXNrxeVg/Vtv7d3T+4kVy468qFT47fltf09sY7th+e9dFdzQs12JDY9kDq9OEQbCX5j9JcHgOr37Bd/O0vdsMvmcmwcoSH0awxEOfbWCIJKbuCXCMwiGci8QVXW9XcQ7yuBHJjEGS2sJ6fI1wwy9pYwMBskz9WpqZ1pHTx28mzBm4GkBmioBZkcLTnfUMh2G55Ox+IAdf4j2xQUz7334mX8BCv/8fcwzMDKQbOQlMCbprqCEwAAt9bcN8SHRpJE7ebcmgfB387/VGZyh03/Ei82f38619xowLPjKGwPBlw7482cACxhFb6oY8y8G5hBRR+fLyrhZHB7Osv6SukFykYs73OfW+O9nB2351B1RmNDAPidMpnKjE6ZTOMM5+kqIvwDB/JPC/x9E1i0/puIc5/COHGMZSICIjLbABSkdsT0x97KRDlRxDdgS9zjV/51aG+lyiN9AakcrDVfvTYSet8hgCIpun/24xPxz/GnJbR0DUshF79Dpk3nkuUF5Z5CrNK+9MAwr9SuonwAfCeAs11Mxm7fGDdIDV+R7WZAdfVaUsKvnsyWh+e289j7s+5JLnXSBlNgqfrW5z6odiG2D0uLi97nfehbMsi+PPdhVdPGXyG/Uu6jLU6pnrazZ4t/Oe5z3lD43vJ1ysaFhvwrpmD7w3bUyVGCmMjAt5E0+XaZQ9TFky94M2TutEmXFp8hxke4BQcthXYFUKe63Wt0Yyg4n4u+siu460cD//YxoD2WnI1nOZv/m1qgWQAERsjBocHxwWpG6mwUwrr1Dg7TKf09W3dT2HSeYSvujDmFO6LwHnCUH8mEj14AdEsDRdttF+BhELeyFcJTdFIxwMaNt4SIq3VRTvSEORR6pwppVfnkU2KPr9I5NDrPiCqnmE57t+CX/8ORR9njnmwuYhe6/yF+GnFEPKVnkL1Xxu4a/qcklP9IKP75UPwyPRCfrUnTrk9jkyiG/jgAvP1RuNsIemtw+xQZsz211BpXIY2TpuQX+rC0hmoYFzVzxOSv26vwQ99wku/8yw8YoxNVB3P7+087N22BdILbE5jmZ8F4onwwJmtZlrUOr1jFyFe87T8bZHp5Y2ZlcmgNeIymRe3fwu0iZ65EWcrPbzb2h5aSJ4015pbbJbVlj2mAAFN0vWw9Jeyn8rkIizRsUAb/i4LxslcnWrdbaiOwFqPQs4VRQWYHHkUcpfcJXyBlp1VNTXv56wy00eiy8j1OA3WA4VkjGW6v4+FXshh+u7+Qp3hhDN1V/DvCZXucG+dZKqSQrZ5D/oBi1yfZzPFtXq0RKaO1rw5yqZ6bai4ezBHl+Muz1D402rWbmSRPSUZ4GgeXXihD1OFi2d9qUaj6YBlu2pqv0/q/C65X8d/h1KqeAMyWH4gq1d16vP1hE7MivsqfrDDX8HM+mtcoAVgzrGP/jRrBlis9JoLCJXuIUR9XeVNuY1H5ZfkU3hMdf9JNk/O05aG+Ua1AnjNi3viDQHVQX16XozqXozttY3kSA75cZyn0MZKU4mLId7EisrcHMES4D1HivCey+AtngwPDCN8BrJKPwKVMfWF/E03/6gviEQKhdR/TO/aeLYAAEiPgWJMVnYvJ28gSVz16exsa7Ywd34ODwt/P9/g1LqKvr9lWdlyQ7pIT8oxm89KOMqOH8AdJE8OB3t4FWeQYi1ysgaCr2IUVMz5T1CG5gvhxHHxPunnX8ot+mBKWtiu9Ul2hRQJUHQuvWHoTbYg8yf7oQvg1FD5pm8S/7nFLnyftCLbJ17Y7TlL9v+kM3wqe4wl5VfKTuIZgP6EJR5xjPXik2+XwHiYdbATePaOIx5Id/Hh2x0glJ8YUnOv8NQZsVJLqtbpiEJIWIre6v15V7seOGBHnZ6gAN2sGF7eahDoEsmP+y9bewfzw3zU9VcBpfqO8Ny1ZvKerXNCfKzRlYIPK7gZPh7ireCxDTC0yMvr41CK2npPBIyOZdCL9bAtYjsQxQ7IlWHWTRDuvUKEd8V85J/+R2zscgrO3Mtp3XxsWifW3JfuDLu5OQMvW9vyO12RP2JBhhMAbRgpSTxJfHSJIikBChHvULY8dm+HwN67PmY/shHIswjXquCh+adLa6HmbdIDgByA3BjZuu53kxyWjAQTZqYQ/yZZ6ZkMgGPHkYZMcdFHEoe7SFllFMtJmej5ZR//+pdJp3h8Ny+OX76RAFtVd++kQBSXU5SH9TlDute99xCZLwJVzs7K7G6a500AzBPWtZ4LefJVvBesDGUTW7Z2T1XohmOCokaN7XiuRlmhbQj38IgHr3ef2AHoDTZ6Pu/vFkccRkHAM/hLPUqbV8tr68IJ1gJ+SDiiAsyvlomG6Rxtzh02m8/5n7T/JmANEoYxP/D0PxSVvQmCh1VeDvKlvsOCzfvlfn1GtNj1xDjnGY3YwtYKVjRPgv5wEdwCS/2QCnLbfTukHyx6VlnxOnafzqAuTjq3BEt65xov2UmieehajXoZc8nI+N9D6ZqC2hSexOw0Ze1/+LAvXKoE4i1PoyxChhS41spLoASoi6lLmaTz0/wRfRnlyN2xxl/kenprRepsTNFo++j/yROQiwHfcs+muyWw+i4/QGryn1O5vANOsVPuwQK+NgvkvmyzcXLmzjJXLmfav5NIamJpZH0yfi53+E8QraEkJIR38kIyARH7nYGL7txGHBe/32Mz+nZcUjNzFiH8ZRL34bJj4REaBXUe+tSAgFm9p5dOfFL8o9rs5iHelLpNHnZcndeTn3ahbJDu9VRURV2SkmxjojtX4X5nVFdabR87eAKQEV493cc4yYtTOHAofDWYjVARfQ6uzvyCmaBjCrgIR/c4l/y20Mj5TnmewPYM5HzUvFWX0n3urysvx7zMG0qt2DUfmfQ/qKlUBkYjn0Vbm5rtgvWcpL0QvFYbtaCJ3J+QO4uWh9oNHGHml5nVZOhMNoboc6e0V3RWAfDaenVdVg4GO4i4mXiHb0h2rLvmWbEGUg9ErOjt2UW3lMVSwUZYpvZPRS12fbRsMABlPtOD7PgPV4ppp0VtGeE55SRsNqp+sBNSCbeWui55QpUfbLo9w/EC81R0dOm0rqnL8zTnZSyzVv6wWhmhMuALHGuMLa87wAAAAABLlwQI9jO4ZcXQ0YrwHH83N6sBs0oD/0w0Pcqem07vWOfz4F9Y3XTIuysh7oGOPVrQ/X756yQg8fX/47VsABiJAAAAGbs7j2qFXLVsDoL+ZR0mdgnrCa/+QfAAAA=";

const trades=[
  ["⌂","Roofing"],
  ["⌕","Plumbing"],
  ["ϟ","Electrical"],
  ["❄","HVAC"],
  ["♜","Fencing"],
  ["▦","Building"],
  ["◒","Landscaping"],
];

const services=[
  ["◢","Google Ads","Get found when people are actively searching for your trade."],
  ["∞","Meta Ads","Reach local homeowners and create demand in your service area."],
  ["▣","Websites","Turn traffic into enquiries with a clear, high-converting website."],
  ["▤","Follow Up","Respond faster and keep good leads from slipping through the cracks."],
  ["⌕","SEO","Build long-term local visibility and be found when it matters."],
];

const steps=[
  ["01","Enquiry","Tell us about your trade, service area and growth goals."],
  ["02","Plan","We map the right channel mix and customer journey for your business."],
  ["03","Launch","We build the campaigns, pages and follow-up needed to go live."],
  ["04","Grow","We keep improving the system around the jobs you actually want."],
];

export default function Home(){
  const [job,setJob]=useState(8000);
  const [spend,setSpend]=useState(2500);
  const [closeRate,setCloseRate]=useState(25);
  const breakEvenJobs=useMemo(()=>Math.max(1,Math.ceil(Number(spend||0)/Math.max(1,Number(job||0)))),[spend,job]);
  const leadsNeeded=useMemo(()=>Math.max(1,Math.ceil(breakEvenJobs/(Math.max(1,Number(closeRate||0))/100))),[breakEvenJobs,closeRate]);

  useEffect(()=>{
    const reveal=()=>{
      document.querySelectorAll("[data-reveal]").forEach((el)=>{
        if(el.getBoundingClientRect().top < window.innerHeight * 0.88){
          el.setAttribute("data-visible","true");
        }
      });
    };
    reveal();
    window.addEventListener("scroll",reveal,{passive:true});
    window.addEventListener("resize",reveal);
    return()=>{
      window.removeEventListener("scroll",reveal);
      window.removeEventListener("resize",reveal);
    };
  },[]);

  return <main>
    <div className="promoTicker" aria-label="Current promotion">
      <div className="tickerEdge tickerEmail">
        <span className="mailIcon">✉</span>
        <a href="mailto:Rohan@Monstagroup.com">Rohan@Monstagroup.com</a>
      </div>

      <div className="promoTrack">
        {[0,1].map((group)=><div className="promoGroup" key={group}>
          {Array.from({length:6}).map((_,i)=><span className="promoPair" key={i}>
            <span className="promoPink">GET MORE LEADS</span>
            <span className="promoDot">•</span>
            <span className="promoOffer">FREE MONTH OFFER</span>
            <span className="promoDot">•</span>
          </span>)}
        </div>)}
      </div>

      <div className="tickerEdge tickerSocials" aria-label="Social media">
        <a href="#" aria-label="Facebook" className="socialIcon socialFacebook">f</a>
        <a href="#" aria-label="Instagram" className="socialIcon socialInstagram">◎</a>
        <a href="#" aria-label="LinkedIn" className="socialIcon socialLinkedin">in</a>
      </div>
    </div>

    <header className="siteHeader">
      <div className="shell headerInner">
        <a className="logo" href="#"><img src="/monsta-miami-logo.png" alt="Monsta Miami"/></a>
        <nav>
          <a href="#services">Services</a>
          <a href="#results">Results</a>
          <a href="#process">Process</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="headerActions"><a className="button buttonSmall primaryCta" href="#contact">Get More Jobs <span>→</span></a><a className="offerButton headerOffer" href="#contact">Free Month Offer</a></div>
      </div>
    </header>

    <section className="hero">
      <div className="heroGlow heroGlowOne"></div>
      <div className="shell heroGrid">
        <div className="heroCopy">
          <div className="eyebrow">Digital marketing for tradies</div>
          <h1>More jobs.<br/><span>Less chasing.</span></h1>
          <p>We help tradies get found, generate more enquiries and turn them into booked work.</p>
          <div className="heroActions">
            <a className="button primaryCta" href="#contact">Get More Jobs <span>→</span></a>
            <a className="offerButton" href="#contact">Free Month Offer</a>
          </div>
        </div>

        <div className="heroCalculator">
          <div className="heroCalcTop">
            <div>
              <div className="heroCalcEyebrow">Make the spend make sense.</div>
              <h2>What does your marketing need to return?</h2>
              <p>See what your investment needs to generate to pay for itself.</p>
            </div>
            <span className="heroCalcIcon">↗</span>
          </div>

          <div className="heroCalcFields heroCalcFieldsThree">
            <label>Monthly marketing investment
              <select value={spend} onChange={e=>setSpend(e.target.value)}>
                <option value="1500">$1,500</option>
                <option value="2500">$2,500</option>
                <option value="4000">$4,000</option>
                <option value="6000">$6,000</option>
                <option value="10000">$10,000</option>
              </select>
            </label>
            <label>Average job value
              <select value={job} onChange={e=>setJob(e.target.value)}>
                <option value="1000">$1,000</option>
                <option value="2500">$2,500</option>
                <option value="5000">$5,000</option>
                <option value="8000">$8,000</option>
                <option value="12000">$12,000</option>
                <option value="20000">$20,000</option>
              </select>
            </label>
            <label>Your lead-to-job close rate
              <select value={closeRate} onChange={e=>setCloseRate(e.target.value)}>
                <option value="10">10%</option>
                <option value="20">20%</option>
                <option value="25">25%</option>
                <option value="30">30%</option>
                <option value="40">40%</option>
                <option value="50">50%</option>
              </select>
            </label>
          </div>

          <div className="breakEvenTarget">
            <span className="breakEvenLabel">Your break-even target</span>
            <div className="breakEvenPrimary">
              <strong>{breakEvenJobs}</strong>
              <span>{breakEvenJobs===1?"booked job":"booked jobs"}</span>
            </div>
            <div className="breakEvenSecondary">
              or approximately <b>{leadsNeeded} {leadsNeeded===1?"qualified lead":"qualified leads"}</b>
            </div>
            <p>Based on a ${Number(spend).toLocaleString()} investment, ${Number(job).toLocaleString()} average job and {closeRate}% close rate.</p>
          </div>

          <div className="heroPlan">
            <span className="heroPlanLabel">Your plan includes</span>
            <div className="heroPlanColumns">
              <div>
                <b>Acquire</b>
                <span>Google + Meta</span>
              </div>
              <div>
                <b>Convert</b>
                <span>Landing pages + tracking</span>
              </div>
              <div>
                <b>Follow up</b>
                <span>Automation + optimisation</span>
              </div>
            </div>
          </div>

          <a className="heroCalcCta" href="#contact">Build my plan <span>→</span></a>
        </div>
      </div>
    </section>

    <section className="tradeSection">
      <div className="shell tradebar">
        {trades.map(([icon,name])=><div className="tradeItem" key={name}>
          {name==="Roofing"
            ? <img className="tradeWordmark" src={roofingSrc} alt="Roofing"/>
            : <><b>{icon}</b><span>{name}</span></>}
        </div>)}
      </div>
    </section>

    <section id="services" className="section services" data-reveal="true">
      <div className="shell">
        <div className="sectionHeader">
          <div>
            <div className="eyebrow">Our services</div>
            <h2>Everything you need for a steady flow of jobs.</h2>
          </div>
          <p>A complete digital system built around the way trade businesses actually win work.</p>
        </div>

        <div className="serviceGrid">
          {services.map(([icon,name,desc])=>
            <article className="serviceCard" key={name}>
              <div className="serviceIcon">{icon}</div>
              <h3>{name}</h3>
              <p>{desc}</p>
              <a href="#contact">Learn more <span>→</span></a>
            </article>
          )}
        </div>
      </div>
    </section>

    <section id="results" className="section results" data-reveal="true">
      <div className="shell resultsGrid">
        <div className="resultsCopy">
          <div className="eyebrow">What the system is built to improve</div>
          <h2>More visibility.<br/>Better follow-up.<br/>More booked work.</h2>
          <p>Every part of the system is designed around one commercial goal: turning attention into real enquiries and real jobs.</p>
          <div className="metricRow">
            <div><b>01</b><span>Get found</span></div>
            <div><b>02</b><span>Convert enquiries</span></div>
            <div><b>03</b><span>Follow up faster</span></div>
          </div>
        </div>

        <div className="resultFeature">
          <div className="resultLabel">What we optimise</div>
          <div className="optimiseList">
            <div><span>01</span><div><b>Visibility</b><p>Show up when local customers are actively looking for your trade.</p></div></div>
            <div><span>02</span><div><b>Conversion</b><p>Turn more of that attention into genuine enquiries and quoting opportunities.</p></div></div>
            <div><span>03</span><div><b>Follow-up</b><p>Respond faster and keep valuable leads moving instead of going cold.</p></div></div>
          </div>
        </div>
      </div>
    </section>

    <section id="contact" className="section contact" data-reveal="true">
      <div className="shell contactCard">
        <div className="contactCopy">
          <div className="eyebrow">Ready for more jobs?</div>
          <h2>Let’s grow your business.</h2>
          <p>Tell us what you do and where you work. We’ll show you what we’d focus on first.</p>
          <div className="contactPoints"><span>✓ No obligation</span><span>✓ Tailored to your business</span><span>✓ Clear next step</span></div>
        </div>
        <form className="leadForm">
          <input placeholder="Full name"/>
          <input placeholder="Phone number"/>
          <select defaultValue=""><option value="" disabled>Your trade / business type</option>{trades.map(([,t])=><option key={t}>{t}</option>)}</select>
          <button type="button">Show Me The Opportunity <span>→</span></button>
        </form>
      </div>
    </section>

    <section id="process" className="section process" data-reveal="true">
      <div className="shell">
        <div className="sectionHeader processHeader">
          <div><div className="eyebrow">Our process</div><h2>Simple. Strategic. Effective.</h2></div>
          <p>A clear four-step path from first conversation to a marketing system that is live and improving.</p>
        </div>
        <div className="processGrid">
          {steps.map(([num,title,desc])=>
            <article className="processCard" key={num}>
              <span className="stepNum">{num}</span>
              <h3>{title}</h3>
              <p>{desc}</p>
            </article>
          )}
        </div>
      </div>
    </section>

    <section className="section finalSection" data-reveal="true">
      <div className="shell finalCard">
        <div><div className="eyebrow">More jobs are closer than you think.</div><h2>Build a system that brings the work to you.</h2></div>
        <a className="button" href="#contact">Get More Jobs <span>→</span></a>
      </div>
    </section>

    <footer>
      <div className="shell footerInner">
        <img src="/monsta-miami-logo.png" alt="Monsta Miami"/>
        <div className="footerLinks"><a href="#services">Services</a><a href="#results">Results</a><a href="#process">Process</a><a href="#contact">Contact</a></div>
        <a className="footerCta" href="#contact">Get More Jobs →</a>
      </div>
    </footer>
  </main>;
}