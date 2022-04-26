package com.security;


import java.util.ArrayList;
import java.util.List;

import org.springframework.security.authentication.AuthenticationCredentialsNotFoundException;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.stereotype.Component;

import com.database.UserDatabase;


@Component
public class SecurityAuthenticationProvider implements AuthenticationProvider
{
		@Override
		public Authentication authenticate(Authentication authentication) throws AuthenticationException
		{
				String account = authentication.getName();
				String password = authentication.getCredentials().toString();
				if (authorizedUser(account, password))
				{
					List<GrantedAuthority> grantedAuths = new ArrayList<>();
					grantedAuths.add(new GrantedAuthority() {
						@Override
						public String getAuthority() {
							// TODO Auto-generated method stub
							return "AUTH_USER";
						}
					});
					
					Authentication auth = new UsernamePasswordAuthenticationToken(account, password, grantedAuths);
					System.out.println(auth.getAuthorities());
					return auth;
				}
				else
				{
						throw new AuthenticationCredentialsNotFoundException("Invalid Credentials!");
				}
		}
		private boolean authorizedUser(String account, String password)
		{	
			UserDatabase database =new UserDatabase();
			if(database.checkExistAccount(account)&&database.checkExistPassword(password)) {
				return true;
			}else {return false;}
		}

		@Override
		public boolean supports(Class<?> authentication)
		{
				return UsernamePasswordAuthenticationToken.class.isAssignableFrom(authentication);
		}
}