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
			System.out.println(account);
			System.out.println(password);
			
			if (authenticationdUser(account, password))
			{
				List<GrantedAuthority> authoritys = new ArrayList<>();
				grantedAuths(account, authoritys);
				Authentication auth = new UsernamePasswordAuthenticationToken(account, password, authoritys);
				return auth;
			}
			else
			{
				throw new AuthenticationCredentialsNotFoundException("Invalid Credentials!");
			}
		}
		
		private void grantedAuths(String account,List<GrantedAuthority> authoritys) {
			authoritys.add(new GrantedAuthority() {
				/**
				 * 
				 */
				private static final long serialVersionUID = 1L;

				@Override
				public String getAuthority() {
					// TODO Auto-generated method stub
					return "ROLE_USER";
				}
			});
			UserDatabase database =new  UserDatabase();
			String UR=database.getUserRole(account);
			if(UR.equals("ROLE_ADMIN")) {
				authoritys.add(new GrantedAuthority() {
					/**
					 * 
					 */
					private static final long serialVersionUID = 1L;

					@Override
					public String getAuthority() {
						// TODO Auto-generated method stub
						return "ROLE_ADMIN";
					}
				});
			}
			
		}
		
		private boolean authenticationdUser(String account, String password)
		{
			UserDatabase database =new UserDatabase();
			if(!database.checkDeleted(database.getUserID(account))&&database.checkExistAccount(account)&&database.checkExistPassword(password)) {
				return true;
			}else {return false;}
		}

		@Override
		public boolean supports(Class<?> authentication)
		{
				return UsernamePasswordAuthenticationToken.class.isAssignableFrom(authentication);
		}
}